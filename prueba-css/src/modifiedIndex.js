
var arrayTest = [1, 2, 3, 3, 2, 1, 4];

document.getElementById("app").innerHTML = `
  
  <header>
    <h1>Unique Element Challenge</h1>
  </header>

  <section class="content">
    <div class="explanation">
      <div class="targetDiv">
        <h2>Target</h2>
        <div>Find the unique value in the array that is not duplicated. Use the <b>dubbed</b> function to return the unique element.</div>
      </div>
      <div>
        <h2>Considerations</h2>
        <ul>
          <li>Values are duplicated only twice.</li>
          <li>There is only one non duplicate value.</li>
          <li>The non duplicate value can be placed anywhere on the array.</li>
          <li>The result must be an integer.</li>
        </ul>
      </div>
    </div>
    <div class="tests">
      <div class="testData">
        <h2>Test Data</h2>
        <div>${arrayTest}</div>
      </div>
      
      <div class="results">
        <div class="expectedResult">
          <h2>Expected result</h2>
          <div>4</div>
        </div>
        <div class="myResult">
          <h2>Your Result</h2>
          <div>4</div>
        </div>
      </div>
    </div>
  </section>
`;
