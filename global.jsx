Global = React.createClass({
    submit: function() {
        Meteor.call("submit",
            document.getElementById("toName").value,
            document.getElementById("toCo").value,
            document.getElementById("toNumberAndStreet").value,
            (document.getElementById("toNumberAndStreet2").value == "Ex: Apt 9 or PO box 21"? null:document.getElementById("toNumberAndStreet2").value),
            document.getElementById("toCity").value,
            document.getElementById("toState").value,
            document.getElementById("toZip").value,
            document.getElementById("fromName").value,
            document.getElementById("fromCo").value,
            document.getElementById("fromNumberAndStreet").value,
            (document.getElementById("fromNumberAndStreet2").value == "Ex: Apt 9 or PO box 21"? null:document.getElementById("fromNumberAndStreet2").value),
            document.getElementById("fromCity").value,
            document.getElementById("fromState").value,
            document.getElementById("fromZip").value,
            parseFloat(document.getElementById("length").value),
            parseFloat(document.getElementById("width").value),
            parseFloat(document.getElementById("height").value),
            parseFloat(document.getElementById("weight").value),
            function(err, url) {
                if (err)
                    console.log(err);
                console.log(url);
                window.open(url);
            }
        )
    },
    render: function() {
        return(
            <div>
                <h1>To:</h1>
                <p>Name <input type="text" id="toName" placeholder="Ex: John White"/></p>
                <p>Company <input type="text" id="toCo" placeholder="Ex: White & White"/></p>
                <p>Street Address <input type="text" id="toNumberAndStreet" placeholder="Ex: 123 Counting Ave."/></p>
                <p>Street Address 2 (optional) <input type="text" id="toNumberAndStreet2" placeholder="Ex: Apt 9 or PO box 21"/></p>
                <p>City <input type="text" id="toCity" placeholder="Ex: Number City"/></p>
                <p>State <USStates thisID = "toState"/></p>
                <p>Zip Code <input type="text" id="toZip" placeholder="Ex: 12345"/></p>
                <br/>

                <h1>From:</h1>
                <p>Name <input type="text" id="fromName" placeholder="Ex: John White"/></p>
                <p>Company <input type="text" id="fromCo" placeholder="Ex: White & White"/></p>
                <p>Street Address <input type="text" id="fromNumberAndStreet" placeholder="Ex: 123 Counting Ave."/></p>
                <p>Street Address 2 (optional) <input type="text" id="fromNumberAndStreet2" placeholder="Ex: Apt 9 or PO box 21"/></p>
                <p>City <input type="text" id="fromCity" placeholder="Ex: Number City"/></p>
                <p>State <USStates thisID="fromState"/></p>
                <p>Zip Code <input type="text" id="fromZip" placeholder="Ex: 12345"/></p>
                <br/>

                <h1>Package Info:</h1>
                <p>Please enter in whole numbers or decimal format.</p>
                <p>Length (inches) <input type="text" id="length" placeholder="Ex: 4"/></p>
                <p>Width (inches) <input type="text" id="width" placeholder="Ex: 3"/></p>
                <p>Height (inches) <input type="text" id="height" placeholder="Ex: 2.7"/></p>
                <p>Weight (ounces) <input type="text" id="weight" placeholder="Ex: 11.5"/></p>
                <p><button onClick={this.submit}>Submit</button></p>
            </div>
        )
    }
});