//  how to upgrade ?
const handleDateTime = (props) => {
    var date = new Date(props.stringDate),
      mnth = ('0' + (date.getMonth() + 1)).slice(-2),
      day = ('0' + date.getDate()).slice(-2),
      hours = ('0' + date.getHours()).slice(-2),
      minutes = ('0' + date.getMinutes()).slice(-2);
    switch (mnth) {
      case '01':
        mnth = 'ม.ค.';
        break;
      case '02':
        mnth = 'ก.พ.';
        break;
      case '03':
        mnth = 'มี.ค.';
        break;
      case '04':
        mnth = 'เม.ย.';
        break;
      case '05':
        mnth = 'พ.ค.';
        break;
      case '06':
        mnth = 'มิ.ย.';

        break;
      case '07':
        mnth = 'ก.ค.';
        break;
      case '08':
        mnth = 'ส.ค.';
        break;
      case '09':
        mnth = 'ก.ย.';
        break;
      case '10':
        mnth = 'ต.ค.';
        break;
      case '11':
        mnth = 'พ.ย.';
        break;
      case '12':
        mnth = 'ธ.ค.';
        break;
      default:
        break;
    }
    setDayTest({
      year: date.getFullYear(),
      month: mnth,
      day: day,
      hr: hours,
      min: minutes
    });
  };