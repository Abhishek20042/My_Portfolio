const Footer = () => {
  return (
    <footer className="border-t border-slate-800 bg-slate-950 px-6 py-8 text-white">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 md:flex-row">

        {/* Copyright */}
        <p className="text-sm text-slate-400">
          © {new Date().getFullYear()} Abhishek Tiwari. All rights reserved.
        </p>

        {/* Social Links */}
        <div className="flex gap-6 text-sm">

          <a
            href="https://github.com/Abhishek20042"
            target="_blank"
            rel="noreferrer"
            className="text-slate-400 transition hover:text-cyan-400"
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/abhishek-tiwari18"
            target="_blank"
            rel="noreferrer"
            className="text-slate-400 transition hover:text-cyan-400"
          >
            LinkedIn
          </a>

          <a
            href="https://leetcode.com/u/Abhishek_tiwari12/"
            target="_blank"
            rel="noreferrer"
            className="text-slate-400 transition hover:text-cyan-400"
          >
            LeetCode
          </a>

        </div>

      </div>
    </footer>
  );
};

export default Footer;