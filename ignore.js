const ignore = `
cmoa.jp
magazine.jp.square-enix.com
`.split(/\r\n|\r|\n/).slice(1, -1).join("\r\n");

console.log(ignore);