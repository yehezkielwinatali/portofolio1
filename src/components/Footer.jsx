import { ArrowUp } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-5 px-4 bg-card relative border-t border-border mt-12 pt-8">
      <p className="text-sm text-muted-foreground text-center mb-4">
        &copy; {new Date().getFullYear()} Yehezkiel Angelo. All rights reserved.
      </p>
      <div className="flex justify-center">
        <a
          href="#hero"
          className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-colors flex items-center justify-center animate-bounce"
        >
          <ArrowUp />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
