const Eng = {
  symbol: 'eng',
  color: '#000',
  plainIcon: c => {
    return `<path fill="${
      c ? c : this.color
    }" d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zm9.149-21.705a1.78 1.78 0 0 1-.064-.038l-.002-.001-.002-.001-2.667-1.552-1.695-.987-1.736-1.01c-.93-.54-1.89-1.1-2.837-1.649L16.05 5l-.103.04a1.83 1.83 0 0 0-.265.125l-.01.006-3.97 2.355-1.738 1.03c-1.049.622-2.134 1.265-3.194 1.898-.26.125-.253.402-.25.536l.001.032v.06c-.004 2.432-.007 4.947-.013 7.423L6.5 21.257c-.014.204.08.383.238.46 1.892 1.088 3.812 2.196 5.668 3.267l3.342 1.928a.521.521 0 0 0 .273.088.35.35 0 0 0 .214-.072L21.08 24.1l1.82-1.062c.754-.441 1.535-.898 2.3-1.343a.477.477 0 0 0 .282-.472l.015-10.417c.026-.31-.235-.45-.349-.51zm-8.769 15.67l.006-4.443 1.644-.955c.455-.266.92-.536 1.37-.797l1.244-.724.001-.001.026-.017a.572.572 0 0 0 .184-.159l.045-.062v-.076c-.008-.95-.01-2.006-.007-3.325l.001-.612V13.63l3.85-2.252-.006 3.865-.009 5.849a4915.775 4915.775 0 0 0-5.387 3.143zM12.184 13.41l3.822-2.244 3.783 2.232-3.777 2.208-1.304-.749a1147.576 1147.576 0 0 0-2.524-1.447zm-.39.65l3.845 2.205-.006 4.38-3.768-2.196zm-4.52-2.594l3.76 2.16.082 4.958c-.01.195.086.373.241.446.535.313 1.08.63 1.607.936l1.028.599 1.64.955-.003 4.45-8.374-4.83zm17.094-.746l-3.83 2.238-4.275-2.521a.448.448 0 0 0-.5-.01L11.43 12.97l-3.78-2.164 2.626-1.557c1.76-1.045 3.637-2.157 5.736-3.397 1.89 1.106 3.72 2.17 5.264 3.066.54.316 1.09.636 1.622.945l1.469.856zm-7.982 9.927l.003-4.382 3.789-2.214v4.392a1941.6 1941.6 0 0 0-3.792 2.204zm5.127-.793a.427.427 0 0 0 .298-.258.47.47 0 0 0-.078-.504l-.001-.002a.446.446 0 0 0-.33-.153.449.449 0 0 0-.437.376.467.467 0 0 0 .146.441.394.394 0 0 0 .286.117.393.393 0 0 0 .116-.017zm2.064 1.408a.407.407 0 0 0 .44.064.455.455 0 0 0 .276-.364.46.46 0 0 0-.202-.457.426.426 0 0 0-.243-.077.406.406 0 0 0-.221.066.469.469 0 0 0-.222.38.45.45 0 0 0 .172.388zm-13.189-2.32a.458.458 0 0 0-.44.369.456.456 0 0 0 .428.557c.034 0 .07-.005.102-.013a.442.442 0 0 0 .314-.261.46.46 0 0 0-.077-.496.427.427 0 0 0-.327-.156zm11.956 1.576a.442.442 0 0 0 .433.07.438.438 0 0 0 .282-.332.455.455 0 0 0-.139-.449.436.436 0 0 0-.3-.121.46.46 0 0 0-.438.39.47.47 0 0 0 .162.442zm-12.905-.723a.42.42 0 0 0-.28-.11.394.394 0 0 0-.154.032.448.448 0 0 0-.289.391c-.016.185.07.36.217.446a.426.426 0 0 0 .222.066.456.456 0 0 0 .19-.044h.001a.436.436 0 0 0 .254-.334.465.465 0 0 0-.161-.447zm6.51-13.628a.424.424 0 0 0-.074.007.456.456 0 0 0-.352.259v.002a.45.45 0 0 0 .026.442.461.461 0 0 0 .476.203h.002l.003-.001a.438.438 0 0 0 .366-.337.44.44 0 0 0-.107-.42.456.456 0 0 0-.34-.155zM8.15 20.49a.418.418 0 0 0-.432 0 .465.465 0 0 0-.231.41c0 .174.092.333.236.408.06.035.13.054.204.054a.453.453 0 0 0 .244-.074.454.454 0 0 0 .211-.408.446.446 0 0 0-.232-.39zm8.04-11.285a.48.48 0 0 0-.259-.077.45.45 0 0 0-.226.06.44.44 0 0 0-.233.365.444.444 0 0 0 .178.399c.08.063.177.096.284.096a.488.488 0 0 0 .198-.044h.001a.443.443 0 0 0 .272-.38.458.458 0 0 0-.215-.42zm-.57-.758c.085.08.192.122.31.122a.489.489 0 0 0 .2-.044.449.449 0 0 0 .275-.41.449.449 0 0 0-.236-.409.488.488 0 0 0-.234-.06.436.436 0 0 0-.244.072.462.462 0 0 0-.218.352v.003a.442.442 0 0 0 .148.374z" fill-rule="evenodd"/>`;
  },
  colorIcon() {
    return `<g fill="none" fill-rule="evenodd"><circle cx="16" cy="16" fill="#2f2f2f" r="16"/><path d="M25.149 10.295c.114.06.375.202.35.511l-.016 10.417a.477.477 0 0 1-.283.472l-2.3 1.343-1.82 1.062-4.844 2.828a.35.35 0 0 1-.214.072.521.521 0 0 1-.273-.088l-3.342-1.928c-1.856-1.071-3.776-2.179-5.668-3.267-.159-.077-.252-.256-.238-.46l.007-2.752c.006-2.476.01-4.991.012-7.423v-.01a.396.396 0 0 0 .001-.05v-.031c-.004-.135-.01-.412.25-.537 1.06-.633 2.144-1.276 3.193-1.898l1.737-1.03c1.322-.783 2.668-1.582 3.97-2.355l.01-.006a1.83 1.83 0 0 1 .266-.125L16.05 5l.096.057c.946.548 1.908 1.108 2.837 1.65l1.736 1.01 1.695.986 2.667 1.552h.002l.002.002.064.038zm-8.769 15.67l2.962-1.73a8357.882 8357.882 0 0 0 5.387-3.143l.01-5.849.005-3.865-3.85 2.252v1.776a288.84 288.84 0 0 0 .006 3.325v.076l-.045.062a.572.572 0 0 1-.184.16l-.026.016h-.001l-1.244.725c-.45.26-.915.53-1.37.797l-1.644.955zM12.184 13.41a1302.649 1302.649 0 0 0 2.524 1.447l1.304.749 3.777-2.208-3.783-2.232zm-.39.65l.071 4.389 3.768 2.195.006-4.379zm-4.52-2.594l-.019 9.675 8.374 4.83.003-4.451-1.64-.955-1.028-.599c-.527-.306-1.072-.623-1.607-.936-.155-.073-.252-.251-.241-.446l-.081-4.959zm17.094-.746l-1.469-.856-1.622-.945c-1.544-.896-3.375-1.96-5.264-3.066a3322.48 3322.48 0 0 0-5.736 3.397l-2.626 1.557 3.778 2.165 4.334-2.545a.448.448 0 0 1 .5.01l4.276 2.521zm-7.982 9.927a1941.6 1941.6 0 0 1 3.792-2.204V14.05l-3.789 2.214zm5.127-.793a.393.393 0 0 1-.116.017.394.394 0 0 1-.286-.117.467.467 0 0 1-.145-.44.449.449 0 0 1 .436-.377c.123 0 .243.056.33.153l.001.002a.47.47 0 0 1 .078.504.427.427 0 0 1-.298.258zm2.064 1.408a.45.45 0 0 1-.172-.388c.008-.159.09-.3.222-.38a.406.406 0 0 1 .22-.066c.086 0 .17.027.244.077a.46.46 0 0 1 .202.457.455.455 0 0 1-.449.401.407.407 0 0 1-.267-.101zm-13.189-2.32c.125 0 .244.057.327.156a.46.46 0 0 1 .077.496.442.442 0 0 1-.416.274.456.456 0 0 1-.428-.556.458.458 0 0 1 .44-.37zm11.956 1.576a.47.47 0 0 1-.161-.443.46.46 0 0 1 .438-.39c.11 0 .216.044.3.122.127.118.18.289.138.449a.438.438 0 0 1-.282.332.432.432 0 0 1-.433-.07zm-12.905-.723c.133.11.195.285.161.447a.436.436 0 0 1-.254.334h-.001a.456.456 0 0 1-.19.044.426.426 0 0 1-.222-.066.467.467 0 0 1-.217-.446.448.448 0 0 1 .289-.391.394.394 0 0 1 .155-.032c.1 0 .197.038.279.11zm6.51-13.628c.13 0 .253.056.34.154.107.113.147.27.107.42a.438.438 0 0 1-.366.338h-.005a.461.461 0 0 1-.476-.202.45.45 0 0 1-.027-.442l.001-.002a.456.456 0 0 1 .352-.259.424.424 0 0 1 .075-.007zM8.15 20.49c.145.082.233.23.232.39a.454.454 0 0 1-.211.408.453.453 0 0 1-.244.074.399.399 0 0 1-.204-.054.458.458 0 0 1-.236-.408c0-.173.089-.33.231-.41a.418.418 0 0 1 .432 0zm8.04-11.285a.458.458 0 0 1 .215.42.443.443 0 0 1-.272.379.488.488 0 0 1-.2.044.451.451 0 0 1-.283-.096.444.444 0 0 1-.178-.399.44.44 0 0 1 .233-.364.45.45 0 0 1 .226-.06.48.48 0 0 1 .26.076zm-.57-.758a.442.442 0 0 1-.148-.374V8.07a.462.462 0 0 1 .219-.352.436.436 0 0 1 .244-.073c.08 0 .16.021.233.06l.001.001a.449.449 0 0 1 .236.409.449.449 0 0 1-.275.41.489.489 0 0 1-.2.044.442.442 0 0 1-.31-.122z" fill="#fff"/></g>`;
  }
};
export default Eng;