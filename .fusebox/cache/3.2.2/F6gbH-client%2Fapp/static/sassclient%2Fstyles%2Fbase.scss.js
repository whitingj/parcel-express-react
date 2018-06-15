module.exports = { contents: "body {\n  color: #222;\n  font-family: sans-serif;\n  font-weight: lighter;\n  height: 100%;\n  width: 100%;\n  position: relative; }\n  body:before {\n    content: '';\n    z-index: -1;\n    position: absolute;\n    height: 100%;\n    width: 100%;\n    opacity: 0.2; }\n  body #app {\n    padding: 1em 2em; }\n\n.navigation:hover .item {\n  border-bottom-color: transparent !important; }\n\n.navigation .item {\n  transition: all 0.3s ease !important; }\n  .navigation .item:hover {\n    border-color: #1b1c1d !important; }\n\n.cards > .card {\n  box-shadow: none !important; }\n\n.page-content {\n  padding-top: 1em; }\n\nul {\n  list-style-type: none;\n  padding: 0; }\n\nli {\n  margin-bottom: 0.5em; }\n\n.pages {\n  position: relative; }\n  .pages > * {\n    position: absolute;\n    width: 100%; }\n\n.padded {\n  padding: 1em; }\n\n/*# sourceMappingURL=base.scss.map */",
dependencies: [],
sourceMap: "{\n\t\"version\": 3,\n\t\"file\": \"base.scss\",\n\t\"sources\": [\n\t\t\"../../src/client/styles/base.scss\"\n\t],\n\t\"sourcesContent\": [\n\t\t\"body {\\n  color: #222;\\n  font-family: sans-serif;\\n  font-weight: lighter;\\n  height: 100%;\\n  width: 100%;\\n  position: relative;\\n\\n  &:before {\\n    content: '';\\n    z-index: -1;\\n    position: absolute;\\n    height: 100%;\\n    width: 100%;\\n    opacity: 0.2;\\n    // background-image: url('../images/enlist.jpg');\\n  }\\n\\n  #app {\\n    padding: 1em 2em;\\n  }\\n}\\n\\n.navigation {\\n  &:hover .item {\\n    border-bottom-color: transparent !important;\\n  }\\n\\n  .item {\\n    transition: all 0.3s ease !important;\\n\\n    &:hover {\\n      border-color: #1b1c1d !important;\\n    }\\n  }\\n}\\n\\n.cards > .card {\\n  box-shadow: none !important;\\n}\\n\\n.page-content {\\n  padding-top: 1em;\\n}\\n\\nul {\\n  list-style-type: none;\\n  padding: 0;\\n}\\n\\nli {\\n  margin-bottom: 0.5em;\\n}\\n\\n.pages {\\n  position: relative;\\n\\n  > * {\\n    position: absolute;\\n    width: 100%;\\n  }\\n}\\n\\n.padded {\\n  padding: 1em;\\n}\\n\"\n\t],\n\t\"names\": [],\n\t\"mappings\": \"AAAA,AAAA,IAAI,CAAC;EACH,KAAK,EAAE,IAAI;EACX,WAAW,EAAE,UAAU;EACvB,WAAW,EAAE,OAAO;EACpB,MAAM,EAAE,IAAI;EACZ,KAAK,EAAE,IAAI;EACX,QAAQ,EAAE,QAAQ,GAenB;EArBD,AAQE,IARE,AAQD,OAAO,CAAC;IACP,OAAO,EAAE,EAAE;IACX,OAAO,EAAE,EAAE;IACX,QAAQ,EAAE,QAAQ;IAClB,MAAM,EAAE,IAAI;IACZ,KAAK,EAAE,IAAI;IACX,OAAO,EAAE,GAAG,GAEb;EAhBH,AAkBE,IAlBE,CAkBF,IAAI,CAAC;IACH,OAAO,EAAE,OAAO,GACjB;;AAGH,AACE,WADS,AACR,MAAM,CAAC,KAAK,CAAC;EACZ,mBAAmB,EAAE,sBAAsB,GAC5C;;AAHH,AAKE,WALS,CAKT,KAAK,CAAC;EACJ,UAAU,EAAE,wBAAwB,GAKrC;EAXH,AAQI,WARO,CAKT,KAAK,AAGF,MAAM,CAAC;IACN,YAAY,EAAE,kBAAkB,GACjC;;AAIL,AAAA,MAAM,GAAG,KAAK,CAAC;EACb,UAAU,EAAE,eAAe,GAC5B;;AAED,AAAA,aAAa,CAAC;EACZ,WAAW,EAAE,GAAG,GACjB;;AAED,AAAA,EAAE,CAAC;EACD,eAAe,EAAE,IAAI;EACrB,OAAO,EAAE,CAAC,GACX;;AAED,AAAA,EAAE,CAAC;EACD,aAAa,EAAE,KAAK,GACrB;;AAED,AAAA,MAAM,CAAC;EACL,QAAQ,EAAE,QAAQ,GAMnB;EAPD,AAGE,MAHI,GAGF,CAAC,CAAC;IACF,QAAQ,EAAE,QAAQ;IAClB,KAAK,EAAE,IAAI,GACZ;;AAGH,AAAA,OAAO,CAAC;EACN,OAAO,EAAE,GAAG,GACb\"\n}",
headerContent: undefined,
mtime: 1529093277625,
devLibsRequired : undefined,
ac : undefined,
_ : {}
}