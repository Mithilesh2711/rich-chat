const boldBtn = document.querySelector("#bold")
const strikeBtn = document.querySelector("#strike")
const italicBtn = document.querySelector("#italic")
const colorBtn = document.querySelector("#link")

function getIndex(A,B){
    let dp = new Array(1000);
    for (let i = 0; i < dp.length; i++) {
        dp[i] = new Array(1000).fill(-1)
    }
    let a = A.length;
    let b = B.length;
    for (let i = 0; i < a; ++i) {
        if (i > 0 && A[i] !== B[0]) {
            dp[i][0] = dp[i - 1][0];
        }
        if (A[i] === B[0]) {
            dp[i][0] = i;
        }
    }
    for (let j = 1; j < b; ++j) {
        for (let i = 1; i < a; ++i) {
            if (A[i] === B[j]) {
                dp[i][j] = dp[i - 1][j - 1];
            }
            else {
                dp[i][j] = dp[i - 1][j];
            }
        }
    }
    let answer = "";
    let best_length = 1e9;

    for (let i = 0; i < a; ++i) {
        if (dp[i][b - 1] !== -1) {

            let start = dp[i][b - 1];
            let end = i;
            let current_length = end - start + 1;
            if (current_length < best_length) {
                best_length = current_length;
                answer = A.slice(start, start + best_length);
            }
        }
    }
    return answer;
    
}


function bold(){
    var html = document.getElementById('fake_textarea').innerHTML;
    
    var cur_text = window.getSelection().toString().replace(/(\r\n|\n|\r)/gm, "");

    var s = getIndex(html,cur_text)

    var l=html.indexOf(s)
    var r=l+s.length;

    var res = html.substring(0,l)+"<b>"+html.substring(l,r)+"</b>"+html.substring(r);
    document.getElementById('fake_textarea').innerHTML = res;

}

function italic(){
    var html = document.getElementById('fake_textarea').innerHTML;
    
    var cur_text = window.getSelection().toString().replace(/(\r\n|\n|\r)/gm, "");

    var s = getIndex(html,cur_text)

    var l=html.indexOf(s)
    var r=l+s.length;

    var res = html.substring(0,l)+"<em>"+html.substring(l,r)+"</em>"+html.substring(r);
    document.getElementById('fake_textarea').innerHTML = res;

}

function strike(){
    var html = document.getElementById('fake_textarea').innerHTML;
    
    var cur_text = window.getSelection().toString().replace(/(\r\n|\n|\r)/gm, "");

    var s = getIndex(html,cur_text)

    var l=html.indexOf(s)
    var r=l+s.length;

    var res = html.substring(0,l)+"<s>"+html.substring(l,r)+"</s>"+html.substring(r);
    document.getElementById('fake_textarea').innerHTML = res;

}

function quote(){
    var html = document.getElementById('fake_textarea').innerHTML;
    
    var cur_text = window.getSelection().toString().replace(/(\r\n|\n|\r)/gm, "");

    var s = getIndex(html,cur_text)

    var l=html.indexOf(s)
    var r=l+s.length;

    var res = html.substring(0,l)+"<q>"+html.substring(l,r)+"</q>"+html.substring(r);
    document.getElementById('fake_textarea').innerHTML = res;

}

function code(){
    var html = document.getElementById('fake_textarea').innerHTML;
    
    var cur_text = window.getSelection().toString().replace(/(\r\n|\n|\r)/gm, "");

    var s = getIndex(html,cur_text)

    var l=html.indexOf(s)
    var r=l+s.length;

    var res = html.substring(0,l)+"<code>"+html.substring(l,r)+"</code>"+html.substring(r);
    document.getElementById('fake_textarea').innerHTML = res;

}

function link(){
    var html = document.getElementById('fake_textarea').innerHTML;
    
    var cur_text = window.getSelection().toString().replace(/(\r\n|\n|\r)/gm, "");

    var s = getIndex(html,cur_text)

    var l=html.indexOf(s)
    var r=l+s.length;
    cur_text = window.getSelection().toString()
    var a = `<a href=${cur_text}>${cur_text}</a>`

    var res = html.substring(0,l)+a+html.substring(r);
    document.getElementById('fake_textarea').innerHTML = res;

}


function unord(){
    var html = document.getElementById('fake_textarea').innerHTML.toString();
    
    var cur_text = window.getSelection().toString().replace(/(\r\n|\n|\r)/gm, "");

    var s = getIndex(html,cur_text)

    var l=html.indexOf(s)
    var r=l+s.length;
    cur_text = window.getSelection().toString()
    s=cur_text.split('\n').map((a)=>"<li>"+a+"</li>").join("")

    var res = html.substring(0,l)+"<ul>"+s+"</ul>"+html.substring(r);
    document.getElementById('fake_textarea').innerHTML = res;

}

function ord(){
    var html = document.getElementById('fake_textarea').innerHTML.toString();
    
    var cur_text = window.getSelection().toString().replace(/(\r\n|\n|\r)/gm, "");

    var s = getIndex(html,cur_text)

    var l=html.indexOf(s)
    var r=l+s.length;
    cur_text = window.getSelection().toString()
    s=cur_text.split('\n').map((a)=>"<li>"+a+"</li>").join("")

    var res = html.substring(0,l)+"<ol>"+s+"</ol>"+html.substring(r);
    document.getElementById('fake_textarea').innerHTML = res;

}
