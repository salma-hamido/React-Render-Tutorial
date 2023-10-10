import React from "react";
import jsPDF from "jspdf";
import "jspdf-autotable";

class AppClass extends React.Component {
  constructor() {
    super();
    this.state = {
      people: [
        {
          Subject: "Salma Ha",
          Attendance: "8",
          Participation: "8",
          Homework: "6"
        },
        {
          Subject: "Salma Ha",
          Attendance: "8",
          Participation: "8",
          Homework: "6"
        },
        {
          Subject: "Salma Ha",
          Attendance: "8",
          Participation: "8",
          Homework: "6"
        },
        {
          Subject: "Salma Ha",
          Attendance: "8",
          Participation: "8",
          Homework: "6"
        },
        {
          Subject: "Salma Ha",
          Attendance: "8",
          Participation: "8",
          Homework: "6"
        },
        {
          Subject: "Salma Ha",
          Attendance: "8",
          Participation: "8",
          Homework: "6"
        },
        {
          Subject: "Salma Ha",
          Attendance: "8",
          Participation: "8",
          Homework: "6"
        },
        {
          Subject: "Salma Ha",
          Attendance: "8",
          Participation: "8",
          Homework: "6"
        },
        {
          Subject: "Salma Ha",
          Attendance: "8",
          Participation: "8",
          Homework: "6"
        },
        {
          Subject: "Salma Ha",
          Attendance: "8",
          Participation: "8",
          Homework: "6"
        },
        {
          Subject: "Salma Ha",
          Attendance: "8",
          Participation: "8",
          Homework: "6"
        },
        {
          Subject: "Salma Ha",
          Attendance: "8",
          Participation: "8",
          Homework: "6"
        },
        {
          Subject: "Salma Ha",
          Attendance: "8",
          Participation: "8",
          Homework: "6"
        },
        {
          Subject: "Salma Ha",
          Attendance: "8",
          Participation: "8",
          Homework: "6"
        },
        {
          Subject: "Salma Ha",
          Attendance: "8",
          Participation: "8",
          Homework: "6"
        },
        {
          Subject: "Salma Ha",
          Attendance: "8",
          Participation: "8",
          Homework: "6"
        },
        {
          Subject: "Salma Ha",
          Attendance: "8",
          Participation: "8",
          Homework: "6"
        },
        {
          Subject: "Salma Ha",
          Attendance: "8",
          Participation: "8",
          Homework: "6"
        },
        {
          Subject: "Salma Ha",
          Attendance: "8",
          Participation: "8",
          Homework: "6"
        },
        {
          Subject: "Salma Ha",
          Attendance: "8",
          Participation: "8",
          Homework: "6"
        },
        {
          Subject: "Salma Ha",
          Attendance: "8",
          Participation: "8",
          Homework: "6"
        },
        {
          Subject: "Salma Ha",
          Attendance: "8",
          Participation: "8",
          Homework: "6"
        },
        {
          Subject: "Salma Ha",
          Attendance: "8",
          Participation: "8",
          Homework: "6"
        },
        {
          Subject: "Salma Ha",
          Attendance: "8",
          Participation: "8",
          Homework: "6"
        },
        {
          Subject: "Salma Ha",
          Attendance: "8",
          Participation: "8",
          Homework: "6"
        },
        {
          Subject: "Salma Ha",
          Attendance: "8",
          Participation: "8",
          Homework: "6"
        },
        {
          Subject: "Salma Ha",
          Attendance: "8",
          Participation: "8",
          Homework: "6"
        },
        {
          Subject: "Salma Ha",
          Attendance: "8",
          Participation: "8",
          Homework: "6"
        }
      ]
    };
  }

  exportPDF = () => {
    const unit = "pt";
    const size = "A4"; // Use A1, A2, A3 or A4
    const orientation = "portrait"; // portrait or landscape

    const marginLeft = 40;
    const doc = new jsPDF(orientation, unit, size);

    doc.setFontSize(15);

    const title = "International School";
    const headers = [
      [
        {
          content: "Subject",
          styles: { halign: "left", fillColor: [22, 160, 133] }
        },
        {
          content: "Attendance",
          styles: { halign: "left", fillColor: [22, 160, 133] }
        },
        {
          content: "Participation",
          styles: { halign: "left", fillColor: [22, 160, 133] }
        },
        {
          content: "Homework",
          styles: { halign: "left", fillColor: [22, 160, 133] }
        }
      ]
    ];

    const data = this.state.people.map((elt) => [
      elt.Subject,
      elt.Attendance,
      elt.Participation,
      elt.Homework
    ]);

    let content = {
      startY: 200,
      head: headers,
      body: data,
      headStyles: { fillColor: [155, 89, 182] },
      // bodyStyles: {
      //   fillColor: [52, 73, 94],
      //   textColor: 240
      // },

      // Default for all columns
      styles: { overflow: "ellipsize", cellWidth: "wrap" },
      // Override the default above for the text column
      // columnStyles: { text: { cellWidth: "20" } },
      // columnStyles: {
      //   Homework: {
      //     fontStyle: "bold",
      //     halign: "center"
      //   },
      //   Subject: {
      //     innerWidth: "10px"
      //   }
      // },
      rowPageBreak: "auto"
    };

    // doc.text(title, marginLeft, 40);
    // doc.text(title, 250, 40);
    // doc.text("2022/2023", 250, 60);
    // doc.text("Date: 15-02-2023", marginLeft, 150);
    // doc.text("Name: Salma", marginLeft, 180);

    var totalPagesExp = "{total_pages_count_string}";
    var base64Img =
      "data:image/png;base64, iVBORw0KGgoAAAANSUhEUgAAAAUA%0AAAAFCAYAAACNbyblAAAAHElEQVQI12P4//8/w38GIAXDIBKE0DHxgljNBAAO%0A    9TXL0Y4OHwAAAABJRU5ErkJggg==";

    doc.autoTable({
      head: headers,
      body: data,
      didDrawPage: function (data) {
        // Header
        doc.setFontSize(20);
        doc.setTextColor(40);
        if (base64Img) {
          doc.addImage(
            base64Img,
            "JPEG",
            data.settings.margin.left,
            15,
            100,
            100
          );
        }
        doc.text("Report", data.settings.margin.left + 15, 22);

        // Footer
        var str = "Page " + doc.internal.getNumberOfPages();
        // Total page number plugin only available in jspdf v1.0+
        if (typeof doc.putTotalPages === "function") {
          str = str + " of " + totalPagesExp;
        }
        doc.setFontSize(10);

        // jsPDF 1.4+ uses getWidth, <1.4 uses .width
        var pageSize = doc.internal.pageSize;
        var pageHeight = pageSize.height
          ? pageSize.height
          : pageSize.getHeight();
        doc.text(str, data.settings.margin.left, pageHeight - 10);
      },
      margin: { top: 30 }
    });
    doc.save("report.pdf");
  };

  render() {
    return (
      <div>
        <button onClick={() => this.exportPDF()}>Generate Report</button>
      </div>
    );
  }
}

export default AppClass;
