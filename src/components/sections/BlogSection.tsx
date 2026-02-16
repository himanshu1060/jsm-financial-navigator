import { Button } from "@/components/ui/button";

const blogs = [
  {
    title: "Why SIP is the Best Way to Build Wealth",
    desc: "Discover how systematic investment plans can help you achieve your financial goals with disciplined investing.",
    /* Replace this image URL with actual blog image */
    img: "https://via.placeholder.com/400x250/1a5632/ffffff?text=Blog+1",
  },
  {
    title: "Understanding Health Insurance Benefits",
    desc: "Learn about the importance of health insurance and how to choose the right plan for your family.",
    img: "https://via.placeholder.com/400x250/1e6b3a/ffffff?text=Blog+2",
  },
  {
    title: "Tax Saving Investment Strategies for 2025",
    desc: "Explore smart investment options that help you save taxes while growing your wealth steadily.",
    img: "https://via.placeholder.com/400x250/237d43/ffffff?text=Blog+3",
  },
];

const BlogSection = () => (
  <section id="blogs" className="section-padding bg-background">
    <div className="container mx-auto max-w-6xl">
      <h2 className="text-2xl md:text-4xl font-bold text-primary text-center mb-10">
        Latest Insights
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogs.map((blog) => (
          <div
            key={blog.title}
            className="bg-card border border-border rounded-lg overflow-hidden hover:shadow-lg transition-shadow group"
          >
            {/* Replace this image URL with actual blog image */}
            <img
              src={blog.img}
              alt={blog.title}
              className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
              loading="lazy"
            />
            <div className="p-5">
              <h3 className="text-lg font-semibold text-foreground mb-2">{blog.title}</h3>
              <p className="text-sm text-muted-foreground mb-4">{blog.desc}</p>
              <Button variant="outline" size="sm" className="rounded-full border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                Read More
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default BlogSection;
