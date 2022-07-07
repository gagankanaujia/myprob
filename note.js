console.log("magic notes");
showNotes();
//localStorage.clear();  //important because u may get error in  push() 


//user click button to add notes
let addBtn= document.getElementById('addBtn');

// process addEventlistner -->
addBtn.addEventListener('click',function(e) {
  
    //get all the text  from text Area by using its Id
    let addTxt =document.getElementById("addTxt");

    // check whether local staorage have some notes text or not
    let notes=localStorage.getItem("notes");

    if (notes == null)
       notesObj=[] ; //set to null
    else 
       notesObj =JSON.parse(notes);  // convert all notes to obj


    notesObj.push(addTxt.value);
    localStorage.setItem("notes",JSON.stringify(notesObj));
    addTxt.value="";
    console.log(notesObj);

   showNotes();
});

//  display all notes 

function showNotes(){
    let notes=localStorage.getItem("notes");

    if (notes == null)
    notesObj=[] ; //set to null
 else 
    notesObj =JSON.parse(notes);  // convert all notes to obj


    let html="";

    notesObj.forEach(function(element,index) {
        html += `<div class="mx-2 my-2 card" style="width: 18rem;">
                    <div class="card-body">
                        <h5 class="card-title">Note ${index+1}</h5>
                        <p class="card-text">${element}</p>
                        <button id="${index}" onclick()="deleteNote(this.id)"  class="btn btn-primary">Delete Note</button>
                    </div>
                </div>` ;
            
    });

    let notesElm = document.getElementById("notes");
    if(notesObj.length!=0){
        notesElm.innerHTML=html;
    }
    else {
        notesElm.innerHTML = `Nothing to show! Use "Add a Note" section above to add notes.`;
      }
}


// delete notes ->>>>>>

   function deleteNote(index)
   {
    console.log("i m delete note",index);
   }
   

   

