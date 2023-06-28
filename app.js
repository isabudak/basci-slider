const slider=document.querySelector(".slider");
const ileriButonu=document.getElementById("ileri");
const geriButonu=document.getElementById("geri");

let sliderBaslangici=0;

ileriButonu.addEventListener("click",()=>{
    sliderBaslangici++;

    showImgs();
});

geriButonu.addEventListener("click",()=>{
    sliderBaslangici--;
    showImgs();
});

function showImgs(){
    const images=slider.querySelectorAll("img");
    const totalImages=images.length;


    if (sliderBaslangici < 0) {
        sliderBaslangici = totalImages - 1;
      } else if (sliderBaslangici >= totalImages) {
        sliderBaslangici = 0;
      }
    
      // Tüm görselleri gizliyoruz
      images.forEach((image) => {
        image.style.display = 'none';
      });
    
      // Mevcut görseli görüntülüyoruz
      images[sliderBaslangici].style.display = 'block';
    }




