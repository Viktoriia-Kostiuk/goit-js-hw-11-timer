class CountdownTimer {
  constructor({ selector, targetDate }) {
    this.selector = selector;
    this.targetDate = targetDate;
    
    this.countDown = null;

    this.timerEl =  document.querySelector(this.selector);
    this.daysEl = document.querySelector("[data-value='days']");
    this.hoursEl = document.querySelector("[data-value='hours']");
    this.minutesEl = document.querySelector("[data-value='mins']");
    this.secondsEl = document.querySelector("[data-value='secs']");
  }

  getStart() {
        this.countDown = setInterval(() => {
            let time = this.calcTime(this.targetDate.getTime() - Date.now())
          this.updateCounter(time)
        }, 1000);
  }

  calcTime(time) {;
        const days = this.pad(Math.floor((time / (1000 * 60 * 60 * 24))));
        const hours = this.pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
        const minutes = this.pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
        const seconds = this.pad(Math.floor((time % (1000 * 60)) / 1000));
        return {days, hours, minutes, seconds};
    }

    pad(value) {
        return String(value).padStart(2, '0');
    }
  
     updateCounter({days, hours, minutes, seconds}) {
        this.daysEl.textContent = days;
        this.hoursEl.textContent = hours;
        this.minutesEl.textContent = minutes;
        this.secondsEl.textContent = seconds;
  }
}

const counter=new CountdownTimer({
  selector: '#timer-1',
  targetDate: new Date('Jul 28, 2022'),
});

counter.getStart();
