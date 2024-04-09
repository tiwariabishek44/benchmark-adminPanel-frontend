export const consoleLog = (info) => {
    try{
    // Get the stack trace
    const stack = new Error().stack;
    // Extract the file name from the stack trace
    const fileName = stack.split('\n')[2].match(/\((.*):\d+:\d+\)$/)[1].split('/').pop();
    // Get the current date and time
    const currentDate = new Date().toISOString();
    // Format the message
    const message = `${fileName} :: ${currentDate} :: ${info}`;
    // Print the message to the console
    console.log(message);
    } catch(error){
        
    }
  }

//   export class ConsoleLog{
//     constructor(fileName){
//         this.fileName = fileName
//     }

    
//   }
