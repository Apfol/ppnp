(function () {
    'use strict';
    window.addEventListener('load', function () {
        // Fetch all the forms we want to apply custom Bootstrap validation styles to
        var forms = document.getElementsByClassName('needs-validation');
        // Loop over them and prevent submission
        var validation = Array.prototype.filter.call(forms, function (form) {
            form.addEventListener('submit', function (event) {
                event.preventDefault();
                if (form.checkValidity() === false) {
                    event.stopPropagation();
                } else {
                    doOperation();
                }
                form.classList.add('was-validated');
            }, false);
        });
        function doOperation() {
            var operation = $("input:checked").val();
            var firstValue = parseInt($("#firstValue").val());
            var secondValue = parseInt($("#secondValue").val());
            switch (operation) {
                case "sum":
                    var result = firstValue + secondValue;
                    alert("El resultado es: " + result);
                    break;
                case "difference":
                    var result = firstValue - secondValue;
                    alert("El resultado es: " + result);
                    break;
                case "multiply":
                    var result = firstValue * secondValue;
                    alert("El resultado es: " + result);
                    break;
                case "divide":
                    var result = firstValue / secondValue;
                    alert("El resultado es: " + result);
                    break;
                default:
                // code block
            }
        }
    }, false);
})();