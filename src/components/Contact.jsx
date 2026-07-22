import { motion } from "framer-motion";

const Contact = () => {
  const contactItems = [
    {
      icon: "📧",
      title: "Email",
      description: "abhishek.mtiwari2004@gmail.com",
      href: "mailto:abhishek.mtiwari2004@gmail.com",
      external: false,
    },
    {
      icon: "💼",
      title: "LinkedIn",
      description: "View Profile",
      href: "https://www.linkedin.com/in/abhishek-tiwari18",
      external: true,
    },
    {
      icon: "🐙",
      title: "GitHub",
      description: "View Projects",
      href: "https://github.com/Abhishek20042",
      external: true,
    },
    {
      icon: "🧠",
      title: "LeetCode",
      description: "View Profile",
      href: "https://leetcode.com/u/Abhishek_tiwari12/",
      external: true,
    },
    {
      icon: "📱",
      title: "Phone",
      description: "+91 93245 98649",
      href: "tel:+919324598649",
      external: false,
    },
  ];

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-slate-900 px-6 py-20 text-white"
    >

      {/* Background Glow */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.2, 0.1],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="pointer-events-none absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/10 blur-3xl"
      />

      <div className="relative z-10 mx-auto max-w-6xl">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-12 text-center"
        >
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-cyan-400">
            Get In Touch
          </p>

          <h2 className="text-4xl font-bold md:text-5xl">
            Contact Me
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-slate-400">
            Feel free to reach out to me for opportunities, collaborations,
            or any professional discussion.
          </p>
        </motion.div>

        {/* Contact Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-5">

          {contactItems.map((item, index) => (
            <motion.a
              key={item.title}
              href={item.href}
              target={item.external ? "_blank" : undefined}
              rel={item.external ? "noreferrer" : undefined}
              initial={{
                opacity: 0,
                y: 50,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
              }}
              whileHover={{
                y: -10,
                scale: 1.03,
              }}
              whileTap={{
                scale: 0.97,
              }}
              className="group rounded-2xl border border-slate-700 bg-slate-950 p-6 text-center transition duration-300 hover:border-cyan-400 hover:shadow-xl hover:shadow-cyan-500/10"
            >

              {/* Icon */}
              <motion.div
                whileHover={{
                  scale: 1.2,
                  rotate: 8,
                }}
                transition={{
                  type: "spring",
                  stiffness: 300,
                }}
                className="mb-4 text-4xl"
              >
                {item.icon}
              </motion.div>

              <h3 className="font-semibold transition group-hover:text-cyan-400">
                {item.title}
              </h3>

              <p className="mt-2 break-words text-sm text-slate-400 transition group-hover:text-slate-300">
                {item.description}
              </p>

            </motion.a>
          ))}

        </div>

      </div>
    </section>
  );
};

export default Contact;