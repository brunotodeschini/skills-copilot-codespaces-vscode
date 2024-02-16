function skillsMember() {
  return {
    name: "John",
    age: 30,
    skills: ["JS", "React", "Node"],
    details: function() {
      return this.name + " has " + this.skills.length + " skills";
    }
  };
}