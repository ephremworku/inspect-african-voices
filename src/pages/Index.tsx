import { Link } from "react-router-dom";
import { Play, Users, Globe, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Index = () => {
  const values = [
    {
      icon: <Users className="h-8 w-8 text-primary" />,
      title: "Authentic Voices",
      description: "We amplify genuine perspectives rooted in lived experiences, ensuring narratives come from those who've walked the path."
    },
    {
      icon: <Globe className="h-8 w-8 text-sunset" />,
      title: "African Diversity",
      description: "Celebrating the rich tapestry of African cultures, traditions, and modern realities across the continent."
    },
    {
      icon: <Heart className="h-8 w-8 text-gold" />,
      title: "Community First",
      description: "Building bridges between communities through shared stories and understanding diverse perspectives."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/30">
      <Header />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-primary/10 via-sunset/5 to-gold/10 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-6xl">
              The Insider's <span className="text-primary">Perspective</span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              Inspektv is a platform where individuals share their personal insights, experiences, and perspectives 
              on social topics. We foreground authentic African voices and diverse viewpoints.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link to="/videos">
                <Button size="lg" className="bg-gradient-to-r from-primary to-sunset hover:from-primary/90 hover:to-sunset/90">
                  <Play className="mr-2 h-4 w-4" />
                  Watch Videos
                </Button>
              </Link>
              <Link to="/about">
                <Button variant="outline" size="lg">
                  Learn More
                </Button>
              </Link>
            </div>
          </div>
        </div>
        <div className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]">
          <div className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-primary to-sunset opacity-20 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"></div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">Our Values</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              What drives us to create meaningful content and foster authentic conversations.
            </p>
          </div>
          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-3">
            {values.map((value, index) => (
              <Card key={index} className="border-border hover:shadow-lg transition-shadow duration-300">
                <CardHeader className="text-center">
                  <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-primary/10 to-sunset/10">
                    {value.icon}
                  </div>
                  <CardTitle className="text-xl">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center text-base">
                    {value.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="bg-gradient-to-r from-earth/5 via-savanna/5 to-earth-light/5 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">Our Mission</h2>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              We believe in the power of authentic storytelling. Through our YouTube channel and podcasts, 
              we create a space where African voices can share their unique perspectives on social topics, 
              fostering a deeper understanding of the rich diversity that exists across our continent.
            </p>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              Every story shared is rooted in lived experience, ensuring genuine narratives that educate, 
              inspire, and bring communities together through the universal language of shared human experience.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
