const rows = document.querySelector('[name="rows"]');
const columns = document.querySelector('[name="columns"]');
const gridBtn = document.querySelector('button');
const divGrid = document.querySelector('#gridBox');
const locationBox = document.querySelector('#locaton');
const columnLimit = document.querySelector('#columnLimit');
const rowLimit = document.querySelector('#rowLimit');

columns.addEventListener('keyup', e => {
  const valueLimit = Number(e.target.value)
  if(valueLimit){
    if(valueLimit > 50){
      rowLimit.innerHTML = ''
      columnLimit.innerHTML = 'rows must be between 1 and 50'
      columnLimit.style.color = 'red'
      gridBtn.disabled = true;
    } else {
      columnLimit.innerHTML = ''
      gridBtn.disabled = false;
    }
  } else {
    columnLimit.innerHTML = ''
    columnLimit.innerHTML = 'rows must be valid number'
    columnLimit.style.color = 'red'
    gridBtn.disabled = true;
  }
})

rows.addEventListener('keyup', e => {
  const valueLimit = Number(e.target.value)
  if(valueLimit){
    if(valueLimit > 50){
      rowLimit.innerHTML = ''
      rowLimit.innerHTML = 'rows must be between 1 and 50'
      rowLimit.style.color = 'red'
      gridBtn.disabled = true;
    } else {
      gridBtn.disabled = false;
      rowLimit.innerHTML = ''
    }
  } else {
    rowLimit.innerHTML =''
    rowLimit.innerHTML = 'rows must be valid number'
    rowLimit.style.color = 'red'
    gridBtn.disabled = true;
  }
})

gridBtn.addEventListener('click', evn => {
  locationBox.innerHTML = '';
  divGrid.innerHTML = ''
  const rowsNumber = rows.value;
  const columnsNumber = columns.value;


  for(let n =0; n < rowsNumber; n++){
    for(let i = 0; i < columnsNumber; i++){
      let div = document.createElement('div')
      div.innerHTML = `${n} ${i}`

      divGrid.append(div);
    }
  }


  divGrid.style.gridTemplateRows = `repeat(${rowsNumber}, 1fr)`;
  divGrid.style.gridTemplateColumns = `repeat(${columnsNumber}, 1fr)`;

})

divGrid.addEventListener('click', evn => {
  const value = evn.target.innerHTML
  const valueArr = value.split(' ')
  locationBox.innerHTML = `rIdx: ${valueArr[0]} cIdx: ${valueArr[1]}`
  evn.target.style.backgroundColor = 'blue';
})

