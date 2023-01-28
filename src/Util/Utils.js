export function getBuildCodePic(firstCharacter) {
  return `https://firebasestorage.googleapis.com/v0/b/buildcode-db.appspot.com/o/BuildCode%2Fusers%2F${firstCharacter}.png?alt=media&token=01a9115b-909e-4541-944e-b853be831003`;
}

export function generateKeyWordsForUsers(userName) {
  let tempTitle = userName;
  let keywords = [userName.toLowerCase(), userName.toUpperCase(), userName];

  if (userName.split().length > 0) {
    let newUserNameArray = userName.split(" ");
    for (let i = 0; i < newUserNameArray.length; i++) {
      let tempUserName = newUserNameArray[i];
      for (let index = 1; index <= tempUserName.length; index++) {
        keywords.push(tempUserName.substring(0, index));
      }
      tempUserName = tempUserName.toLowerCase();
      for (let index = 1; index <= tempUserName.length; index++) {
        keywords.push(tempUserName.substring(0, index));
      }
    }
  } else {
    for (let index = 1; index <= userName.length; index++) {
      keywords.push(userName.substring(0, index));
    }
    userName = userName.toLowerCase();
    for (let index = 1; index <= userName.length; index++) {
      keywords.push(userName.substring(0, index));
    }
  }

  const items1 = tempTitle.split(" ");
  const result1 = [];
  for (let i = 0; i < items1.length; i++) {
    for (let j = 1; j <= items1.length; j++) {
      const slice = items1.slice(i, j);
      if (slice.length) result1.push(slice.join(" "));
    }
  }

  const items2 = tempTitle.toLowerCase().split(" ");
  const result2 = [];
  for (let i = 0; i < items2.length; i++) {
    for (let j = 1; j <= items2.length; j++) {
      const slice = items2.slice(i, j);
      if (slice.length) result2.push(slice.join(" "));
    }
  }

  keywords = [...keywords, ...result1, ...result2];

  return keywords;
}

export function timeSince(date) {
  var seconds = Math.floor((new Date() - date) / 1000);

  var interval = seconds / 31536000;

  if (interval > 1) {
    return Math.floor(interval) + " years";
  }
  interval = seconds / 2592000;
  if (interval > 1) {
    return Math.floor(interval) + " months";
  }
  interval = seconds / 86400;
  if (interval > 1) {
    return Math.floor(interval) + " days";
  }
  interval = seconds / 3600;
  if (interval > 1) {
    return Math.floor(interval) + " hours";
  }
  interval = seconds / 60;
  if (interval > 1) {
    return Math.floor(interval) + " minutes";
  }
  return Math.floor(seconds) + " seconds";
}
