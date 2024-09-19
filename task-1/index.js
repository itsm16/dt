const leftSideBarBtn = document.querySelector(".left__sidebar__btn");
const cell = document.querySelector(".ex__cell");
const cellContain = document.querySelector(".cell__container");
cellContain.innerHTML = "<div class='cell'>1</div>";
const leftBtn = document.querySelector(".left__btn");

leftSideBarBtn.addEventListener("click", () => {
  const leftSidebar = document.querySelector(".left__sidebar");

  if (leftSidebar.style.width === "392px") {
    leftSidebar.style.width = "132px";
    document.querySelector(".journey__board").textContent = "";
    cellContain.innerHTML = "<div class='cell'>1</div>";
    leftBtn.style.transform = 'rotate(0deg)';
  } else {

    leftSidebar.style.width = "392px";
    document.querySelector(".journey__board").textContent = "Journey Board";
    cellContain.innerHTML = `
    <div class='ex__cell'>
        <ul class='li__1'>
            <li class='li__bold'>Explore the world of management</li>
        </ul>
        <ul class='li__2'>
            <li class='li__2'>Technical Project Management</li>
            <li class='li__2'>Threadbuild</li>
            <li class='li__2'>Structure your pointers</li>
            <li class='li__2'>4SA Method</li>
        </ul>
    </div>`;
    cell.style.display = "inline";
    leftBtn.style.transform = 'rotate(180deg)';
  }
});
