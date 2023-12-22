import React,{ useRef, useState } from "react"
import questions from "../../questions"
import "./Quiz.css"

const Quiz = () => {
    
    let [index,setIndex] = useState(0)
    
    let[question,setQuestion] = useState(questions[index])
    
    let [lock,setLock] = useState(false)
    
    let [totalMarks,setTotalMarks] = useState(0)

    let [result,setResult] = useState(false)

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

    const quote = () =>{
        let quotes=""
        switch (true) { 

            case totalMarks>2 && totalMarks<5:
                quotes = "Focus and Improve"
                break
            case totalMarks>=5 && totalMarks<9:
                quotes = "Refine Your Skills";
                break
            case totalMarks>8:
                quotes = "Outstanding! Mastered Material";
                break
            default:
                quotes = "Review Fundamental Concepts"
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
                                <h1>{totalMarks}/{questions.length}<span></span></h1>
                            </div>
                        </div>
                    </div>

                <button onClick={resetButton}>R E S E T</button>

            </div>

        
        :
        
        <div className="container">

            <h1>Question {index+1} / <span className="small-font"> {questions.length} </span>  </h1>

            <p className="question">{question.text}</p>

            <hr />

            <ul>
                <li ref={Option1} className="flex" onClick={(e)=> checkAns(e,question.options[0].isCorrect)}>A.] { question.options[0].text}</li>
                <li ref={Option2} className="flex" onClick={(e)=> checkAns(e,question.options[1].isCorrect)}>B.] { question.options[1].text}</li>
                <li ref={Option3} className="flex" onClick={(e)=> checkAns(e,question.options[2].isCorrect)}>C.] { question.options[2].text}</li>
                <li ref={Option4} className="flex" onClick={(e)=> checkAns(e,question.options[3].isCorrect)}>D.] { question.options[3].text}</li>
            </ul>

            <button onClick={nextButton} className="next--button">N E X T</button>

        </div>
        }


    </>
    )

}

export default Quiz