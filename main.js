// The Form Data
let formData = [
  // For demonstration purposes,
  // the first form element has been added to the HTML file as a comment
  // compare the input in the HTML file with the contents of this first object
  {
    "type": "text",
    "label": "First Name",
    "id": "user-first-name",
    "icon": "fa-user",
    "options": []
  },
  {
    "type": "text",
    "label": "Last Name",
    "id": "user-last-name",
    "icon": "fa-user",
    "options": []
  },
  {
    "type": "email",
    "label": "Email Address",
    "id": "user-email",
    "icon": "fa-envelope",
    "options": []
  },
  {
    "type": "text",
    "label": "Current Website URL",
    "id": "user-website",
    "icon": "fa-globe",
    "options": []
  },
  {
    "type": "select",
    "label": "Select Language",
    "id": "user-language",
    "icon": "",
    "options": [
      {
        "label": "English",
        "value": "EN"
      },
      {
        "label": "French",
        "value": "FR"
      },
      {
        "label": "Spanish",
        "value": "SP"
      },
      {
        "label": "Chinese",
        "value": "CH"
      },
      {
        "label": "Japanese",
        "value": "JP"
      }
    ]
  },
  {
    "type": "textarea",
    "label": "Your Comment",
    "id": "user-comment",
    "icon": "fa-comments",
    "options": []
  },
  {
    "type": "tel",
    "label": "Mobile Number",
    "id": "user-mobile",
    "icon": "fa-mobile-phone",
    "options": []
  },
  {
    "type": "tel",
    "label": "Home Number",
    "id": "user-phone",
    "icon": "fa-phone",
    "options": []
  }
];

// HINTS:
// As you can see, we access the first element in the array
// with [0] and then grab the property "label" using the "." operator
( function(){
  // Select the first element from the array
  let first = formData[ 0 ];
  // Log the first object
  console.log( first );
  // Log the string "First Name"
  console.log( first.label );
} )();


// -------- Your Code Goes Below this Line --------

let fields = document.getElementById("fields");

function formText(){
  for (i=0; i<formData.length; i++){
    let type = formData[i].type;
    let label = formData[i].label;
    let id = formData[i].id;
    let options =  formData[i].options;
    const input = document.createElement("input");
    const select = document.createElement("select");
    let option = document.createElement("option");
    const textarea = document.createElement("textarea");


    if (formData[i].type === "text" || formData[i].type === "email" ||formData[i].type === "tel"){
      fields.appendChild(input);
      input.setAttribute("type", type);
      input.setAttribute("placeholder", label);
      input.setAttribute("id", id);
    } else if (formData[i].type === "select") {
      fields.appendChild(select);
      const optionList = fields.querySelector("select");

      for (n=0; n<5; n++){
        let option = document.createElement("option");
        optionList.appendChild(option);
        option.setAttribute("label", options[n].label);
        option.setAttribute("value", options[n].value);
      }

    } else if (formData[i].type === "textarea") {
      fields.appendChild(textarea);
      textarea.setAttribute("type", type);
      textarea.setAttribute("placeholder", label);
      textarea.setAttribute("id", id);

    }
  }
}
formText();
