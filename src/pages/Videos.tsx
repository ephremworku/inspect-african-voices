import { useState } from "react";
import { Search, Clock, Eye } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useRSSFeed } from "@/hooks/useRSSFeed";
import YouTube from "react-youtube";

const Videos = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);
  
  const { data, loading, error } = useRSSFeed("https://rsshub.pseudoyu.com/youtube/user/@Inspektv");

  const filteredVideos = data?.items.filter(video =>
    video.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    video.description.toLowerCase().includes(searchTerm.toLowerCase())
  ) || [];

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const opts = {
    height: '390',
    width: '640',
    playerVars: {
      autoplay: 0,
    },
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="flex items-center justify-center py-24">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto"></div>
            <p className="mt-4 text-muted-foreground">Loading videos...</p>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="flex items-center justify-center py-24">
          <div className="text-center">
            <p className="text-destructive mb-4">Error loading videos: {error}</p>
            <p className="text-muted-foreground">Please try again later.</p>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            Our <span className="text-primary">Videos</span>
          </h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore our collection of authentic conversations and diverse perspectives from across Africa.
          </p>
        </div>

        {/* Search */}
        <div className="mb-8 max-w-md mx-auto">
          <div className="relative">
            <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search videos..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
        </div>

        {/* Video Player */}
        {selectedVideo && (
          <div className="mb-12">
            <Card className="overflow-hidden">
              <CardContent className="p-0">
                <div className="aspect-video flex items-center justify-center bg-black">
                  <YouTube 
                    videoId={selectedVideo} 
                    opts={{
                      ...opts,
                      width: '100%',
                      height: '100%'
                    }}
                    className="w-full h-full"
                  />
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Stats */}
        {data && (
          <div className="mb-8">
            <div className="flex items-center justify-center space-x-8 text-sm text-muted-foreground">
              <div className="flex items-center space-x-2">
                <Eye className="h-4 w-4" />
                <span>{filteredVideos.length} videos found</span>
              </div>
              {data.channelTitle && (
                <Badge variant="outline" className="text-xs">
                  {data.channelTitle}
                </Badge>
              )}
            </div>
          </div>
        )}

        {/* Videos Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredVideos.map((video, index) => (
            <Card 
              key={index} 
              className="overflow-hidden hover:shadow-lg transition-all duration-300 cursor-pointer group"
              onClick={() => setSelectedVideo(video.videoId)}
            >
              <div className="aspect-video relative overflow-hidden bg-muted">
                {video.thumbnail && (
                  <img
                    src={video.thumbnail}
                    alt={video.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = `https://img.youtube.com/vi/${video.videoId}/hqdefault.jpg`;
                    }}
                  />
                )}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
                  <div className="bg-primary/90 text-primary-foreground rounded-full p-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Eye className="h-6 w-6" />
                  </div>
                </div>
              </div>
              
              <CardContent className="p-6">
                <h3 className="font-semibold text-lg line-clamp-2 mb-3 group-hover:text-primary transition-colors">
                  {video.title}
                </h3>
                
                <p className="text-muted-foreground text-sm line-clamp-3 mb-4">
                  {video.description}
                </p>
                
                <div className="flex items-center text-xs text-muted-foreground">
                  <Clock className="h-3 w-3 mr-1" />
                  {formatDate(video.pubDate)}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredVideos.length === 0 && !loading && (
          <div className="text-center py-12">
            <p className="text-muted-foreground">No videos found matching your search.</p>
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
};

export default Videos;