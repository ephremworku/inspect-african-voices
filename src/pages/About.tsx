import { Users, Target, Globe, Lightbulb } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import inspektvLogo from "@/assets/inspektv-logo.jpg";

const About = () => {
  const features = [
    {
      icon: <Target className="h-8 w-8 text-primary" />,
      title: "Our Purpose",
      description: "To create a platform where authentic African voices can share their perspectives on social topics, fostering understanding and dialogue across communities."
    },
    {
      icon: <Users className="h-8 w-8 text-sunset" />,
      title: "Community Focus",
      description: "We believe that the best stories come from those who have lived them. Our content is created by and for the African community, ensuring authentic representation."
    },
    {
      icon: <Globe className="h-8 w-8 text-gold" />,
      title: "Global Impact",
      description: "While rooted in African experiences, our stories resonate globally, building bridges of understanding across cultures and continents."
    },
    {
      icon: <Lightbulb className="h-8 w-8 text-savanna" />,
      title: "Diverse Perspectives",
      description: "We showcase the rich diversity of thought, culture, and experience across Africa, challenging stereotypes and broadening understanding."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-primary/10 via-sunset/5 to-gold/10 py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <div className="mb-8">
              <img 
                src={inspektvLogo} 
                alt="Inspektv Logo" 
                className="h-32 w-32 rounded-full mx-auto object-cover shadow-lg"
              />
            </div>
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-6xl">
              About <span className="text-primary">Inspektv</span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              The Insider's Perspective on African Stories and Social Issues
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Our Mission
              </h2>
            </div>
            
            <div className="prose prose-lg mx-auto">
              <p className="text-lg text-muted-foreground mb-8">
                <strong className="text-foreground">Inspektv (The Insiders Perspective)</strong> is a platform where individuals can share their personal insights, experiences, and perspectives on a wide range of social topics. The central premise is to foreground authentic voices, ensuring that the narratives are rooted in the lived experiences of the speakers rather than second-hand accounts or interpretations by others.
              </p>
              
              <p className="text-lg text-muted-foreground mb-8">
                This approach fosters a rich, diverse tapestry of viewpoints, allowing for a deeper and more nuanced understanding of the subjects discussed. We believe that authentic storytelling has the power to bridge divides, challenge assumptions, and create meaningful connections between people from different backgrounds.
              </p>

              <p className="text-lg text-muted-foreground">
                Through our YouTube channel and podcasts, we celebrate the diversity of Africa by showcasing the culture and different situations across the continent. Every story we share contributes to a broader understanding of African experiences and perspectives.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-gradient-to-r from-earth/5 via-savanna/5 to-earth-light/5 py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              What We Stand For
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              The principles that guide our work and shape our content
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="border-border hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-primary/10 to-sunset/10">
                    {feature.icon}
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact/Connect Section */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Join the Conversation
            </h2>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              Follow us on our journey as we continue to amplify authentic African voices and perspectives. 
              Your story matters, and we're here to help you share it with the world.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="https://www.youtube.com/@Inspektv"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-md bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-sm hover:bg-primary/90 transition-colors"
              >
                Visit Our YouTube Channel
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;