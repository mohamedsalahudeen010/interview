
let ages={
    sala:28,
    kiya:23,
    irfan:30,
    raj:27,
    abdul:20
}




const sortable=Object.fromEntries(
    Object.entries(ages).sort(([,a],[,b])=>a-b)
)

  console.log("Sorted Object ::",sortable)