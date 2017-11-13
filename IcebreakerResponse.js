function IcebreakerResponse(email){
  this.email = email
}

Icebreaker.BatchCreate = function (emails) {
  return emails.map(function(emails){
    return new IcebreakerResponse(emails)
  })

}
