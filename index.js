
const Myarr = [
    {
        "place":"surat",
        "dest":"dumas",
        "url":"https://source.unsplash.com/1600x900/?surat"
    },
    {
        "place":"gandhinagar",
        "dest": "GIFT city",
        "url":"https://source.unsplash.com/1600x900/?gandhinagar"
    }, {
        "place":"HimaChal Pradesh",
        "dest": "GIFT city",
        "url":"https://source.unsplash.com/1600x900/?Himalay"
    }, {
        "place":"Bhutan",
        "dest": "GIFT city",
        "url":"https://source.unsplash.com/1600x900/?Bhutan"
    },
    {
        "place":"Apple Game Zone",
        "dest": "Surat",
        "url":"https://source.unsplash.com/1600x900/?game"
    }, {
        "place":"Tasty Hotel",
        "dest": "Surat",
        "url":"https://source.unsplash.com/1600x900/?hotel"
    }, {
        "place":"Ujjain",
        "dest": "Ujjain",
        "url":"https://source.unsplash.com/1600x900/?Ujjain"
    }, {
        "place":"Kashmir",
        "dest": "Kashmir",
        "url":"https://source.unsplash.com/1600x900/?Kashmir"
    }, {
        "place":"KolKata",
        "dest": "Kolkata",
        "url":"https://source.unsplash.com/1600x900/?Kolkata"
    }, {
        "place":"DharmShala Cricket Ground",
        "dest": "DharmShala",
        "url":"https://source.unsplash.com/1600x900/?cricket"
    }, {
        "place":"Tamil Nadu",
        "dest": "Tamil Nadu",
        "url":"https://source.unsplash.com/1600x900/?Tamilnadu"
    }, {
        "place":"Dwarka sector-8",
        "dest": "Delhi",
        "url":"https://source.unsplash.com/1600x900/?Delhi"
    }

]
let cards = document.getElementById("flex");
let ihtml = ""
for(let i in Myarr){

    ihtml += ` <div class="h-auto sm:my-2 my-3 mx-4  border-2 border-red-700 p-4 rounded-2xl " id="cards">
    <img class="img  rounded-2xl h-52" src=${Myarr[i].url} alt="" srcset="">
    <hr>
    <em class="font-semibold text-zinc-600 mx-1 ">Blog</em><br>
    <p class="font-serif text-xl my-4"> ${Myarr[i].place}</p>
    <div class="flex justify-end">
        <i class="fa-solid fa-location-pin my-1 mx-1"></i><span>${Myarr[i].dest}</span>
    </div>
</div>`
}

cards.innerHTML = ihtml


