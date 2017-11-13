function IcebreakerResponse(email){
  this.email = email
}

Icebreaker.BatchCreate = function (email) {
  return emails.map(function(email){
    return new IcebreakerResponse(email)
  })

}
