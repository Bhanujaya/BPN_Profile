<style>
@import url('https://fonts.googleapis.com/css2?family=DM+Sans:ital,wght@0,400;0,700;1,400;1,700&display=swap');
</style>
<template>
  
  <form >
    <div class="formBox">
    <label for="name">Name</label>
    <input type="text" id="name" placeholder="ชื่อหรือนามแฝงผู้คอมเม้น">

  </div>
  <div class="formBox">
    <label for="comment">Comment</label>
    <input type="text" id="comment" placeholder="เขียนคอมเม้นให้กลุ่มเราได้ที่นี่">

  </div>
 <div class="formBox">
  <button id="btn">
    Submit
  </button>
 </div>
</form>


</template>

<script>
//create array
let comments =[];
//create function
let a = 0;
const addComment = (ev) => {
  //ไม่ให้มันกลับสู้ค่าเริ่มต้น
  ev.preventDefault();
  a +=1
  let comment = {
    id: Date.now(),
    name: document.getElementById("name").value,
    comment: document.getElementById('comment').value
  }
  comments.push(comment);
  document.querySelector('form').reset();
  
  //add to local storage
  localStorage.setItem(a, JSON.stringify(comments) );

}

document.addEventListener('DOMContentLoaded', ()=> {
document.getElementById('btn').addEventListener('click',addComment);

});


</script>


