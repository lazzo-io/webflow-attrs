const input_jl = document.querySelector('[lazzo-input-jsonlead="input"]');

const inputs_triggers = document.querySelectorAll('[lazzo-trigger-jsonlead="trigger"]');

//Compramos tu coche
inputs_triggers.forEach((input) => {
  input.addEventListener("input", function () {
    let jl = {
      "client": {
        "first_name": document.querySelector('[lazzo-field-jsonlead="name"]').value,
        "province": document.querySelector('[lazzo-field-jsonlead="city"]').value,
        "phone": document.querySelector('[lazzo-field-jsonlead="phone"]').value,
        "email": document.querySelector('[lazzo-field-jsonlead="email"]').value
      },
      "appraisal_lead": {
        "car": {
          "type": "used",
          "category": "car",
          "make": document.querySelector('[lazzo-field-jsonlead="brand"]').value
        },
        "comment": document.querySelector('[lazzo-field-jsonlead="message"]').value
      },
      "sales_lead": {
        "origin": {
          "source": document.querySelector('[lazzo-field-jsonlead="utm_source"]').value || "web autopasion",
          "medium": document.querySelector('[lazzo-field-jsonlead="utm_medium"]').value || "form",
          "campaign": document.querySelector('[lazzo-field-jsonlead="utm_campaign"]').value || "website"
        }
      },
      "version": "1.0.0"
    }

    let jl_plain = '<div id="jsonlead">' + JSON.stringify(jl) + '</div>';

    input_jl.value = jl_plain;    
  });
});
