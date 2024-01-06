let arrowindex=1;
function changedisplay()
{
if(arrowindex==1)
{document.getElementById("materials1").style.display="flex";
document.getElementById("doubts1").style.display="none";
document.getElementById('posts1').style.display="none";
document.getElementById('leftarrow').style.visibility="hidden";
document.getElementById('rightarrow').style.visibility="visible";
}
if(arrowindex==2)
{document.getElementById('materials1').style.display="none";
document.getElementById('doubts1').style.display="flex";
document.getElementById('posts1').style.display="none";
    document.getElementById('leftarrow').style.visibility="visible";
    document.getElementById('rightarrow').style.visibility="visible";
}
if(arrowindex==3)
{document.getElementById('materials1').style.display="none";
document.getElementById('doubts1').style.display="none";
document.getElementById('posts1').style.display="flex";
    document.getElementById('leftarrow').style.visibility="visible";
    document.getElementById('rightarrow').style.visibility="hidden";}
}
function changetoright()
{arrowindex++;
    changedisplay();
}
function changetoleft()
{arrowindex--;
    changedisplay();
}
document.getElementById('rightarrow').addEventListener('click',changetoright);
document.getElementById('leftarrow').addEventListener('click',changetoleft);