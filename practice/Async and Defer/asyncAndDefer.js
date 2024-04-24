//Async and Defer are boolean attribute which used along with the script tag to node 
//the external script

//     <!-- Normal -->
//     <script src="./asyncAndDefer.js"></script>
        // HTML PARSER             >>---------------|> HTML Parser Paused here  >>------------>|
        //Load External Script                        >>-------|> Load external script and affect HTML parser
        //Execute Script                                        >>------------|> Run Script and Affect HTML parser
        
//     <!-- Async -->
//     <script async src="./asyncAndDefer.js"></script>
        // HTML PARSER             >>---------------|>HTML Parser Paused here>>------------>|
        //Load External Script        >>------------|> Load external script in background and does not affect HTML parser
        //Execute Script                              >>---------------------|> Run Script and Affect HTML parser

//     <!-- Defer -->
//     <script defer src="./asyncAndDefer.js"></script>
        // HTML PARSER              >>----------------------------------->| HTML Parser does not Paused here
        //Load External Script          >>------------|> Load external script in background and does not affect HTML parser
        //Execute Script                 Run Script and After HTML parser >>---------------------|> 