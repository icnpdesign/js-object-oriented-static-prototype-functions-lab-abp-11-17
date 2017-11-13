function IcebreakerResponse(email){
  this.email = email
}

Icebreaker.BatchCreate = function (email) {
  let icebreakers = []

  emails.forEach(function(email){
    icebreakers.push(new IcebreakerResponse(email))
  })
return icebreakers
}
