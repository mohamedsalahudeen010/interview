// "Write a API call by calling the given API and Populate the data as per the requirement 

// https://gitlab.com/gvanderput/gerard-movie-filtering/-/raw/master/data/movies.json
// * List the movies starts with ""x""
// * List the movies with  released in year y
// * List the  Movies released between the range of years x and y
// * List the Movies with genre x and after the year y 
// "


let fetchFunc=async()=>{
    try {
        let response=await fetch("https://gitlab.com/gvanderput/gerard-movie-filtering/-/raw/master/data/movies.json",{
            method:"GET",
            headers:{
                "content-type":"application/json",
            }   
           })
           let result=await response.json() 
        //    console.log(result)
           //<<<<<<<<<<<<<startsWithX>>>>>>>>>>
          // let startsWithX=result.filter((ele)=>ele.title.startsWith("A"))
                            //<<<<<<<<<<OR>>>>>>>>>>
           let startsWithX=result.filter((ele)=>ele.title[0].toLowerCase()==="a")
           console.log("startsWithX ::::",startsWithX)
           //<<<<<<<<<<<<<<getWithYear>>>>>>>>>>>>
           const getWithYear=(year)=>{
            let getMovieWithYear=result.filter((ele)=>ele.year=year)
            console.log(`Movies released In ${year} ::::`,getMovieWithYear)
           }

        //    getWithYear(2010)
           //<<<<<<<<<<<<<<get From a Year to an Year>>>>>>>>>>>>
           const getFromYearToYear=(year1,year2)=>{
            let getMovieBetweenYears=result.filter((ele)=>(year1<=ele.year && ele.year<=year2))
          
            console.log(`Movies between ${year1} to ${year2} ::::`,getMovieBetweenYears)
           }

           getFromYearToYear(2010,2019)

           //<<<<<<<<<<<<<<get From genre>>>>>>>>>>>>

           const getFromGenre=(x,year)=>{
            let rs={}
            let fromGenre=result.map((ele,i)=>{
                if(ele.genreIds==x && ele.year==year){
                    rs[i]=ele.title
                }
                console.log(ele.genreIds)
                
            })
            return rs
           }

           console.log(getFromGenre(28,2019))
    } catch (error) {
        console.log(error)
    }
}


fetchFunc()