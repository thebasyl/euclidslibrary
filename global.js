const quizes = document.getElementsByClassName('input');
console.log(quizes);

if(quizes)
{
    for(let quiz of quizes)
    {
        quiz.addEventListener('submit', e => 
        {
            e.preventDefault();
            let answer = quiz.children[0].value
            if(quiz.dataset.answer == answer)
            {
                quiz.children[2].innerHTML = `${ answer } is correct, good job!`;
                quiz.children[2].style.color = "#3ac961";
            } else 
            {
                quiz.children[2].innerHTML = `${ answer } is incorrect, try again`;
                quiz.children[2].style.color = "#c94b3a";
            }
        })
    }
}