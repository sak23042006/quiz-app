import React,{ useRef, useState } from "react"
import questions from "../../questions"
import "./Quiz.css"

const Quiz = () => {
    
    let [index,setIndex] = useState(0)
    
    let[question,setQuestion] = useState(questions[index])
    
    let [lock,setLock] = useState(false)
    
    let [totalMarks,setTotalMarks] = useState(0)

    let [result,setResult] = useState(false)

    let [theme,setTheme] = useState(false)

    let[highlight,setHighlight] = useState(false)

    let Option1 = useRef(null)
    let Option2 = useRef(null)
    let Option3 = useRef(null)
    let Option4 = useRef(null)
    
    let optionArray = [Option1,Option2,Option3,Option4]
    
    const checkAns = (e,ans) =>{

        if (lock == false){

            setLock(true)
            if(ans===true ){
                e.target.classList.add("correct")
                setTotalMarks(++totalMarks)
            }
            else{
                e.target.classList.add("wrong")
                optionArray[question.ans-1].current.classList.add("correct")
            }
        }
        
    }

    const nextButton = () =>{
        
        if(lock === true){

            if(index == questions.length - 1){
                setResult(true)
                return
            }
            
            setIndex(++index)
            setQuestion(questions[index])
            setLock(false)
            setHighlight(false)
            optionArray.map((opt)=>{
                opt.current.classList.remove("correct")
                opt.current.classList.remove("wrong")
                return null;
            })
            
        }

    }

    const resetButton =() => {
        setIndex(0)
        setLock(false)
        setQuestion(questions[0])
        setTotalMarks(0)
        setResult(false)
    }

    const themeSet = () => {
        return theme ? <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="black" class="bi bi-brightness-high" viewBox="0 0 16 16">
        <path d="M8 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6m0 1a4 4 0 1 0 0-8 4 4 0 0 0 0 8M8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0m0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13m8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5M3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8m10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0m-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707M4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708z"/>
        </svg> 
        
        : 
        
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-moon-stars-fill" viewBox="0 0 16 16">
        <path d="M6 .278a.768.768 0 0 1 .08.858 7.208 7.208 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277.527 0 1.04-.055 1.533-.16a.787.787 0 0 1 .81.316.733.733 0 0 1-.031.893A8.349 8.349 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.752.752 0 0 1 6 .278"/>
        <path d="M10.794 3.148a.217.217 0 0 1 .412 0l.387 1.162c.173.518.579.924 1.097 1.097l1.162.387a.217.217 0 0 1 0 .412l-1.162.387a1.734 1.734 0 0 0-1.097 1.097l-.387 1.162a.217.217 0 0 1-.412 0l-.387-1.162A1.734 1.734 0 0 0 9.31 6.593l-1.162-.387a.217.217 0 0 1 0-.412l1.162-.387a1.734 1.734 0 0 0 1.097-1.097l.387-1.162zM13.863.099a.145.145 0 0 1 .274 0l.258.774c.115.346.386.617.732.732l.774.258a.145.145 0 0 1 0 .274l-.774.258a1.156 1.156 0 0 0-.732.732l-.258.774a.145.145 0 0 1-.274 0l-.258-.774a1.156 1.156 0 0 0-.732-.732l-.774-.258a.145.145 0 0 1 0-.274l.774-.258c.346-.115.617-.386.732-.732L13.863.1z"/>
        </svg>
    }

    const quote = () =>{
        let quotes=""
        switch (true) { 

            case totalMarks>2 && totalMarks<5:
                quotes = "😪Focus and Improve👍"
                break
            case totalMarks>=5 && totalMarks<=9:
                quotes = "🔥Refine Your Skills🎯";
                break
            case totalMarks>9:
                quotes = "🤩Outstanding! Mastered Material🥳";
                break
            default:
                quotes = "😔Review Fundamental Concepts🤓"
                break
        }
        return quotes
    }
    
    return (
        <>

        {result?
        

            <div className="result--page">

                <h1>{quote()}</h1>
                
                    <div className="container1">
                        <div className="container2">
                            <div className="container3">
                                <h3>Your Score</h3>
                                <h2>{totalMarks}/{questions.length}<span></span></h2>
                            </div>
                        </div>
                    </div>

                <button onClick={resetButton}>R E S E T</button>

            </div>

        
        : 
        
        
        <div style={theme? 
        
        {
            backgroundImage:"linear-gradient(#1a1a1a,#494949)",
            color:"white"
        } 
        
        : 

        {

        }} 
        
        className="container">

            <div className="header--theme flex">

                <h1>Question {index+1} / <span className="small-font"> {questions.length} </span>  </h1>
                <button onClick={()=>theme ? setTheme(false) : setTheme(true)} style={{backgroundColor: `${theme ? "white" : "black" }` , width:"3vw"}}>{themeSet()}</button>

            </div>

            <p style={{color: `${highlight ? "rgb(250, 255, 117)" : "inherit"}`}} className="question">{question.text}</p>

            <hr />

            <ul>
                <li ref={Option1} className="flex" onClick={(e)=> checkAns(e,question.options[0].isCorrect)}>A.] { question.options[0].text}</li>
                <li ref={Option2} className="flex" onClick={(e)=> checkAns(e,question.options[1].isCorrect)}>B.] { question.options[1].text}</li>
                <li ref={Option3} className="flex" onClick={(e)=> checkAns(e,question.options[2].isCorrect)}>C.] { question.options[2].text}</li>
                <li ref={Option4} className="flex" onClick={(e)=> checkAns(e,question.options[3].isCorrect)}>D.] { question.options[3].text}</li>
            </ul>

            <div className="highlight--next flex">
                <button onClick={()=>{
                    setHighlight(!highlight)
                }}  className="next--button">{highlight ? "REMOVE HIGHLIGHT" : "HIGHLIGHT" }</button>
                <button onClick={nextButton} className="next--button">N E X T</button>
            </div>

        </div>
        }


    </>
    )

}

export default Quiz