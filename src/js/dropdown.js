/*Copyright (c) 2023 by Zoomo Design (https://codepen.io/zoomodesign/pen/yNbVVZ)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

document.addEventListener("DOMContentLoaded", function () {
    var questionsAndAnswers = [
        {
            question: "Kann man deine Bilder käuflich erwerben?",
            answer: "Derzeit ist das Malen nur ein Hobby und enge Freunde dürfen sich hin und wieder über eines meiner Bilder freuen.\n" +
                "Aber ich schließe es nicht aus, meine Kunst in der Zukunft auch zum Verkauf anzubieten.\n" +
                "Sollte das der Fall sein wirst du auf meiner Website oder den Social Media Kanälen natürlich darüber informiert!"
        },
        {
            question: "Wie lange dauert es ein Mandala zu malen?",
            answer: "Von einer Stunde bis 30 Stunden Arbeitszeit ist tatsächlich alles möglich!\n" +
                "Meine größten Bilder (40-50 cm Durchmesser) benötigen zwischen 20 - 30 Stunden Malzeit.\n" +
                "Die Kleinsten Bilder (10 cm), Teelichthalter und Lesezeichen können schon in unter 3 Stunden gefertigt werden.\n" +
                "Je detailreicher die Elemente und je mehr Dots eingearbeitet werden, umso länger der Prozess."
        },
        {
            question: "Wie startet man als Anfänger in diese Kunst?",
            answer: "..."
        },
        {
            question: "Welches Material ist für den Start empfehlenswert?",
            answer: "..."
        },
    ];

    var dropdownWrapper = document.getElementById("dropdownWrapper");

    questionsAndAnswers.forEach(function (item, index) {
        var wrapper = document.createElement("div");
        wrapper.className = "wrapper";
        wrapper.id = "wrapper" + index;

        var questionElement = document.createElement("p");
        questionElement.className = "click-text";
        questionElement.textContent = item.question;
        questionElement.innerHTML += '<span class="arrow"></span>';

        var answersList = document.createElement("ul");

        var answerItem = document.createElement("li");
        answerItem.textContent = item.answer;
        answersList.appendChild(answerItem);

        wrapper.appendChild(questionElement);
        wrapper.appendChild(answersList);
        dropdownWrapper.appendChild(wrapper);

        wrapper.addEventListener("click", function () {
            var className = " " + wrapper.className + " ";
            wrapper.className = ~className.indexOf(" active ")
                ? className.replace(" active ", " ")
                : wrapper.className + " active";
        });
    });
});
