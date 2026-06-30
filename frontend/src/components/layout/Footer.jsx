function Footer() {
  return (
    <footer
      className="
        mt-6
        border-t
        border-cyan-500/20
        bg-[#08131D]
        px-6
        py-8
      "
    >
      <div className="max-w-7xl mx-auto text-center">

        <p className="text-sm text-slate-300 leading-7">
          Website Designed, Developed, Content Owned, Maintained and Hosted by
        </p>

        <p className="mt-1 text-cyan-300 font-semibold text-base">
          CSIR–National Environmental Engineering Research Institute, Nagpur
        </p>

        <div className="w-24 h-px bg-cyan-500/30 mx-auto my-5"></div>

        <p className="text-sm text-slate-400">
          Copyright © 2025 – All Rights Reserved –
          The Official Website of CSIR–NEERI, Government of India
        </p>

        <p className="mt-5 text-xs uppercase tracking-[0.35em] text-cyan-400">
          Version 1.0
        </p>

      </div>
    </footer>
  );
}

export default Footer;