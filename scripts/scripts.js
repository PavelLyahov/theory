document.addEventListener('click', function(event) {
    var target = event.target;
    if (target.classList.contains('block')) {
      target.querySelector('.content').classList.toggle('show');
    } else if (target.classList.contains('nested-block')) {
      target.querySelector('.nested-content').classList.toggle('show');
    }
  });


function showContent() {
    var dropdown = document.getElementById('dropdown');
    var selectedOption = dropdown.options[dropdown.selectedIndex].value;
    var blocks = document.getElementsByClassName('content');
    
    for (var i = 0; i < blocks.length; i++) {
    blocks[i].classList.remove('active');
    }

    var selectedBlock = document.getElementById(selectedOption);
    selectedBlock.classList.add('active');
}
