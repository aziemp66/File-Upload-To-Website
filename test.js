const userData = {
    id: 12313131,
    name: "Azie",
    age: 42,
    education: {
        degree: "Masters",
    },
};
const {
    education: { degree },
} = userData;
console.log(degree); //prints: Masters
//OR+
const userProfile = {
    id: 12313131,
    name: "Azie",
    age: 42,
    education: {
        degree: "Masters",
    },
};
const {
    education: { degree: highestDegree },
} = userProfile;
console.log(highestDegree); //prints: Masters
