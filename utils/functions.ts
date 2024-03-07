export function truncateText(text:string, maxLength:number) {
    if (text.length <= maxLength) {
    return text;
    } else {
    return text.substring(0, maxLength) + '...';
    }
}

export const formatMoney = (num:any) => {

    if (num < 1000) {
    return num.toString();
    } else if (num < 1000000) {
    return (num / 1000).toFixed(0) + 'k';
    } else {
    return (num / 1000000).toFixed(0) + 'M';
    }}

export function getDateDifference(dateString:string):string {
    const date: Date = new Date(dateString);
    const now: Date = new Date();
    const seconds = Math.floor((now.getTime() - date.getTime()) / 1000);
  
    let interval = Math.floor(seconds / 31536000);
  
    if (interval > 1) {
      return `${interval} years ago`;
    }
    interval = Math.floor(seconds / 2592000);
    if (interval > 1) {
      return `${interval} months ago`;
    }
    interval = Math.floor(seconds / 604800);
    if (interval > 1) {
      return `${interval} weeks ago`;
    }
    interval = Math.floor(seconds / 86400);
    if (interval > 1) {
      return `${interval} days ago`;
    }
    interval = Math.floor(seconds / 3600);
    if (interval > 1) {
      return `${interval} hours ago`;
    }
    interval = Math.floor(seconds / 60);
    if (interval > 1) {
      return `${interval} minutes ago`;
    }
    return `${Math.floor(seconds)} seconds ago`;
  }