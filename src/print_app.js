import addModalEvent from './add_modal_event';

export default function printApp() {
  const body = document.querySelector('body');
  const container = document.createElement('div');
  container.classList.add('container');
  container.innerHTML = `
    <div class="row">
    <div class="col-md-6 mx-auto text-center bg-primary mt-5 p-5 rounded app">
    
    
    <div class="btn-group btn-group-toggle radios" data-toggle="buttons">
  <label class="btn btn-primary active temp-unit">
    <input type="radio" name="unit" id="cel" autocomplete="off" value="celcius" checked> Celicus(°C)
  </label>
  <label class="btn btn-primary temp-unit">
    <input type="radio" name="unit" id="fah" autocomplete="off" value="fahrenheit"> Fahrenheit(°F)
  </label>
 

</div>    
    
    
    <h1 id="w-location"></h1>

    <h2 id= "country" class="country"><h2>
<h2 class="temperature" id="w-temperature"> </h2>


            <h4 class="text-dark" id="w-description"></h4>
            <h3 id="w-string"></h3>
            <img id="w-icon">
            <ul class="list-group mt-3" id="w-details">
                <li class="list-group-item" id="w-humidity"></li>
                <li class="list-group-item" id="w-feels-like"></li>
                <li class="list-group-item" id="w-wind"></li>

            </ul>
            <hr>
            <!-- Button trigger modal -->
<button type="button" class="btn btn-primary" data-toggle="modal" data-target="#locModal" id="change-location-trigger" >
Change Location
</button>



    </div>
</div>
</div>

<div class="modal fade" id="locModal" tabindex="-1" role="dialog" aria-labelledby="locModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-dialog-scrollable" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="locModalLabel">Choose Location</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
            <form id="w-form">
                <div class="form-group">
                    <label for="city">City</label>
                    <input type="text" id="city" class="form-control" required>
                </div>
              
            </form>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary close-modal" data-dismiss="modal">Close</button>
          <button  id= "w-change-btn" type="button" class="btn btn-primary" type="submit">Save changes</button>
        </div>
      </div>
    </div>
  </div>
  
    `;
  body.appendChild(container);
  const trigger = document.getElementById('change-location-trigger');
  trigger.addEventListener('click', addModalEvent);
}
