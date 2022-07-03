let pyramid = {
    firstStar:  '*',
    secondStar: '**',
    thirdStar:  '***',
    fourthStar: '****',
    fifthStar:  '*****',
    sixthStar:  '******',
}

for (const key in pyramid) {
    if (Object.hasOwnProperty.call(pyramid, key)) {
        const element = pyramid[key];
        console.log(element);
    }
}

// Best I could do^