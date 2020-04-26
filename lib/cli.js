


const validNumOfCommand = () => {

};

const validatePath = (path) => {
  // validate if the path entered doesn't have a special
  //  character type or an incorrect spelling
};

const validateOptions = (options) => {
  // validate if the options entered are --validate, --state or both
  // in other case it should be considered wrong
};

const getStatsOfLinks = (links, caseOption) {

}




const CommandLineInteface = () => {
  const [, , ...args] = process.argv;
  const mypath = '';
  const caseOption;
  switch (args.length) {
    case 1:
      mypath = args[0];
      caseOption = 1;
      break;
    case 2:
      mypath = args[0];
      caseOption = validateOptions(args[1]);
      break;
    case 3:
      mypath = args[0];
      caseOption = validateOptions(args[1], args[2]);
      break;
    default:
      console.log('numero de comandos ingresados invalido')
  }
  if (caseOption !== 0) {
    if (validatePath(mypath)) {
      const [links] = mdLinks(mypath, options);
      if (caseOption > 1) {
        const [stats] = getStatsOfLinks([links], caseOption);
      }
    }
  }

};
