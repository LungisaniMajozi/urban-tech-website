import { motion } from "framer-motion";

export default function ServiceDetailCard({
  icon: Icon,
  tag,
  title,
  items,
  image,
  index,
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-card border border-border rounded-lg overflow-hidden hover:border-accent/30 transition-all duration-300 group"
    >
      {image && (
        <div className="aspect-[16/9] overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            loading="lazy"
          />
        </div>
      )}
      <div className="p-6 lg:p-8">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-lg bg-primary/5 flex items-center justify-center group-hover:bg-accent/10 transition-colors">
            <Icon
              size={20}
              className="text-primary group-hover:text-accent transition-colors"
            />
          </div>
          <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
            {tag}
          </span>
        </div>
        <h3 className="font-heading font-bold text-xl lg:text-2xl text-foreground tracking-tighter mb-4">
          {title}
        </h3>
        <ul className="space-y-2">
          {items.map((item, i) => (
            <li key={i} className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0" />
              <span className="font-body text-muted-foreground text-sm leading-relaxed">
                {item}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}
