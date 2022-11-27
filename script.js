let arr = [
  `Բարև Ձեզ, պատրաստ եք՞`,
  `Քանի տարեկան եք՞`,
  `Բանակում Ծառայել եք՞`,
  `Աշխատում եք թե ոչ՞`,
  `Ամուսնաացած եք թե ոչ՞`,
  `Կուզեք ընկեր ունենալ՞`,
  `Գիտեիք՞ որ Կիթառ նվագող զույգերը ավելի երջանիկ են միմյանց հետ`,
  `Գիտեիք՞ որ դուք շատ գեղեցիկ եք`,
  `Եթե Ծյոմը ձեզ հրավիրեր հանդիպման ինչ՞ կպատասխանեիք`,
];
let i = 0;
console.log(arr[5]);
let a = document.getElementById(`question`);
let yesButton = document
  .querySelectorAll(`button`)
  .forEach((el) => el.addEventListener(`click`, initQuestion));

const getPercent = () => {
  switch (Math.round(Math.random() * 2)) {
    case 0:
      return "130%";
    case 1:
      return "-130%";
    default:
      return "0px";
  }
};

function initQuestion() {
  if (i === arr.length - 1) {
    console.log("last questions");
    document.querySelector("#no").style.transition = "0s";
    document.querySelector("#no").style.pointerEvents = "none";
    document.getElementById(`noParent`).onmouseover = () => {

      let topPos = getPercent();
      let leftPos = getPercent();
      if ((topPos === leftPos) === "0px") {
        leftPos = !Math.round(Math.random()) ? "-130%" : "130%";
      }

      document.querySelector("#no").style.top = topPos;
      document.querySelector("#no").style.left = leftPos;
    };

    document.getElementById(`noParent`).onmouseout = () => {
      document.querySelector("#no").style.top = "0px";
      document.querySelector("#no").style.left = "0px";
    };
  }
  if (i === arr.length) {
    document.querySelector(".section").style.display = "none";
    document.getElementById("background").style.filter = "none";
    document.querySelector("#music").play();
    // document.querySelector(`.snowflakes`).setAttribute(`id`, `new`)
    let fil = document.querySelectorAll(`.snowflake`)
    let initialHeart =  document.querySelector(`.snowflake1 > svg`)
    let fil1 = document.querySelector(`.myVideo`)
    initialHeart.style.width = `700px`
    initialHeart.style.height = `auto`
    // initialHeart.style.top = `-200px`
    initialHeart.style.transition = `2s`
    fil1.style.filter = `blur(4rem)`
    fil.forEach(el => {
      el.style.filter = `blur(4rem)`
    })
    initialHeart.addEventListener(`click`, closeIt)
    function closeIt() {
      let flex = document.querySelector(`.flex`)
      flex.style.display = `none`
      fil1.style.filter = `none`
      fil.forEach(el => {
        el.style.filter = `none`
      })
    }
  } else {
    a.innerHTML = arr[i];
    i++;
  }
}
initQuestion();


//--------------------------------------------------------------------------

// let mainElem = document.getElementById(`new`);
// mainElem.addEventListener(`click`, cancelAnimation);
// function cancelAnimation() {
//   mainElem.style.display = `none`;
//   hearts.forEach((el) => {
//     el.style.filter = `none`;
//   });
// }
let hearts = document.querySelectorAll(`.snowflake`);
let text = document.querySelectorAll(`p`);

hearts.forEach((snowFlake) => {
  snowFlake.addEventListener(`click`, () => {
    snowFlake.classList.toggle("dontMove");
    if (snowFlake.querySelector("p").classList.contains("openText")) {
      snowFlake.querySelector("p").classList.remove("openText");
    } else {
      setTimeout(() => {
        snowFlake.querySelector("p").classList.add("openText");
      }, 1000);
    }
  });
});

const jsAnimation = (snowFlake, dirTog) => {
  if (snowFlake.classList.contains("dontMove")) {
    return;
  }
  const hor = dirTog ? 200 : -200;

  snowFlake.style.left = snowFlake.offsetLeft + hor + "px";
  if (snowFlake.offsetTop >= window.innerHeight) {
    snowFlake.style.transitionDuration = "0s";
    snowFlake.style.top = 0 + "px";
    setTimeout(() => {
      snowFlake.style.transitionDuration = "2.5s";
      snowFlake.style.top = snowFlake.offsetTop + 250 + "px";
    }, 0);
  } else {
    snowFlake.style.transitionDuration = "2.5s";
    snowFlake.style.top = snowFlake.offsetTop + 250 + "px";
  }
};

const animateTheSelection = ({ delayTime = 0, selector }) => {
  let dirTog = false;
  console.log("💜 worked");
  setTimeout(() => {
    setInterval(() => {
      dirTog = !dirTog;
      document
        .querySelectorAll(selector)
        .forEach((e) => jsAnimation(e, dirTog));
    }, 1000);
  }, delayTime);
};

animateTheSelection({
  delayTime: 2000,
  selector: `.snowflake:nth-child(1)`,
});
animateTheSelection({
  selector: `.snowflake:nth-child(2)`,
});
animateTheSelection({
  delayTime: 2700,
  selector: `.snowflake:nth-child(3)`,
});
animateTheSelection({
  delayTime: 1500,
  selector: `.snowflake:nth-child(4)`,
});
animateTheSelection({
  delayTime: 2500,
  selector: `.snowflake:nth-child(5)`,
});
animateTheSelection({
  delayTime: 3500,
  selector: `.snowflake:nth-child(2)`,
});
animateTheSelection({
  delayTime: 500,
  selector: `.snowflake:nth-child(5)`,
});
animateTheSelection({
  delayTime: 1300,
  selector: `.snowflake:nth-child(6)`,
});
animateTheSelection({
  delayTime: 700,
  selector: `.snowflake:nth-child(7)`,
});
animateTheSelection({
  delayTime: 2200,
  selector: `.snowflake:nth-child(8)`,
});
animateTheSelection({
  delayTime: 3000,
  selector: `.snowflake:nth-child(9)`,
});
animateTheSelection({
  delayTime: 1000,
  selector: `.snowflake:nth-child(10)`,
});
