function prime()
{

  
var n=prompt("enter a number");



for(i=2;i<n;i++)
if(n%i==0)

break;

if(i==n)
alert(n+"\n its a prime number");

else
alert(n+"\n its not a prime number");



}


function Fibonocises(num)
{
var a=0;
var b=1;
var sum;

num=prompt("enter a number");


for(i=0;i<num;i++)

{

    sum=a+b;
    a=b;
    b=sum;




alert(sum +"\n fibanocises");


}
return sum;

}

function palindrome(str)


{

    str= prompt("enter a string");


    let i = 0;
    let j = str.length - 1;
    while(i < j) {
        if(str[i] == str[j]) {
            i++; 
            j--;
            alert("palimdrome");
        }
        else {
            alert("not a palindrome");
         }


   return str;


    }
}

function thnk()
{

    alert("thank you");
}