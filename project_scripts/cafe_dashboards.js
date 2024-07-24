const cafe_dashboards = `<div class = "row">
<h2>Overview</h2>
<div class="col-lg-12">
  <p class = "tab">The second part of my Application Design and Development class involved using Figma and Human-Centered design principles to
    create mockup dashboards for Admins and Managers to address their needs. We will dive into their problems, desires, and painpoints as well as discuss
    how the dashboard mockups address these needs.
  </p>
</div>
</div>

<div class ="row">
<h2>Personas</h2>
<div class="col-lg-12" >
  <p class = "tab">Our first persona is a Manager named Kathryn. Kathryn is a 35 year old Store Manager for the Oakland Cafe 23 store. She has been working
    at cafe 23 for 10 years and her goal is to efficiently manage store operations, ensure fair shift assignments, streamline payroll, track employee tasks, and have quick access to employee information.
  </p>
  <p class = "tab">The second persona is an Admin named Alex. Alex founded cafe 23 two decades ago. His primary goals are to oversee the entire Cafe23 network, optimize performance, make data-driven decisions, and ensure the business's overall success.
  </p>
</div>
</div>

<div class ="row">
<h2>Pain Points</h2>
<div class="col-lg-12" >
  <p>Manager Pain Points
  </p>
  <ul>
    <li>Shift Management: Struggles to ensure equitable shift assignments and timely announcements to employees.</li>
    <li>Payroll Processing: Often forgets to generate and submit weekly payroll on time, which impacts employee incomes.</li>
    <li>Task Tracking: Difficulties in keeping up-to-date records of tasks performed by employees.</li>
    <li>Employee Contact: Struggles to quickly access employee contact information for emergencies.</li>
    <li>Employee Records: Finds it challenging to make quick updates to employee records in case of life changes.</li>
  </ul>
  <p>Admin Pain Points
  </p>
  <ul>
    <li>Performance Metrics: Clear performance metrics for each store and the entire network.</li>
    <li>Key Performance Indicators (KPIs): Identifying the right KPIs to gauge business health.</li>
    <li>Data Analysis: Analyzing data to make informed decisions.</li>
  </ul>
</div>
</div>

<div class = "row">
<h2>User Stories</h2>
<div class="col-lg-12">
   <ul>
    <li>Admin: Oversees all of Cafe23.</li>
    <li>Managers: Run individual stores and the employees for their store.</li>
    
   </ul>
    
</div>
<div class = "col-lg-12 scroll">
  <style>
    div.scroll {
      width: 100%;
      height: 500px;
      overflow: auto;
      text-align: justify;
      /* padding: 20px; */
      margin-bottom:24px;
    }
  </style>
  <table class="courses">
    <tr>
      <th><p>As a "Role"</p></th>
      <th><p>I want to ...</p></th>
      <th><p>So that I can...</p></th>
    </tr>
    <tr>
      <td><p>Admin</p></td>
      <td><p>See the yearly profits across all my stores</p></td>
      <td><p>See how well my buisness is doing</p></td>
    </tr>
    <tr>
      <td><p>Admin</p></td>
      <td><p>See quanitfiable information for each of my managers</p></td>
      <td><p>determine if my managers are doing their job well</p></td>
    </tr>
    <tr>
      <td><p>Admin</p></td>
      <td><p>See which stores have the most employees under 18 years old</p></td>
      <td><p>Can spread those employees out more and adhere to proper labor laws</p></td>
    </tr>
    <tr>
      <td><p>Admin</p></td>
      <td><p>See store averages for yearly, quarterly, and monthly metrics</p></td>
      <td><p>Get a sense for how well each individual store is doing.
        </p></td>
    </tr>
    
    <tr>
      <td><p>Manager</p></td>
      <td><p>See info on all my employees</p></td>
      <td><p>Reach employees quickly in emergencies</p></td>
    </tr>
    <tr>
      <td><p>Manager</p></td>
      <td><p>Be able to edit my employees info</p></td>
      <td><p>Can adjust to changes in my employees lives</p></td>
    </tr>
    <tr>
      <td><p>Manager</p></td>
      <td><p>See when payroll is due</p></td>
      <td><p>Pay my employees on time</p></td>
    </tr>
    <tr>
      <td><p>Manager</p></td>
      <td><p>Add shifts</p></td>
      <td><p>Make sure the store has proper shift coverage</p></td>
    </tr>
    <tr>
      <td><p>Manager</p></td>
      <td><p>See what shifts are not covered</p></td>
      <td><p>Can ensure the store has 100% shift coverage</p></td>
    </tr>
    <tr>
      <td><p>Manager</p></td>
      <td><p>See which employees have under the expected hours</p></td>
      <td><p>Ensure equal shift allocation.</p></td>
    </tr>
    
    
    
   
   
  </table>
</div>
</div>

<div class = "row">
<h2>Manager Dashboard</h2>
<div class = "col-lg-12 project_images">
  <video width="100%" height="auto" autoplay muted loop>
    <source src="../Images/cafe/Interactions_dashboard1.mov" type="video/mp4">
    Your browser does not support the video tag.
  </video>
  <p class = "project_caption">Manager Dashboard Interactions</p>
</div>
</div>

<div class = "row">
<div class = "col-lg-6">
  <h2>
    Employee Management
  </h2>
  <p class = "tab">Managers have access to comprehensive information about their store's employees, including statistics on the average number of tasks completed during a shift and the current scheduling hours. At the forefront of this data, managers can readily view key metrics such as the total number of employees, the percentage of employees performing below the average number of tasks, and the percentage of employees working fewer hours than expected.
  </p>
</div>
<div class = "col-lg-6">
  <h2>
    Important Notices
  </h2>
  <p class = "tab">Managers will notice red alerts strategically placed in two prominent areas for immediate attention. The first is adjacent to their name within the initial section of the screen. The second is a dedicated section exclusively for notices related to shift coverage and payroll, ensuring swift attention and efficient resolution of pertinent issues.
  </p>
</div>
</div>
<div class = "row">
<div class = "col-lg-6">
  <h2>
    Shift Coverage
  </h2>
  <p class = "tab">Managers have access to a weekly shift coverage chart, allowing them to promptly identify shifts with only one or no scheduled employees. Additionally, they can view a chart displaying the current percentage of shift coverage at the module's top. Adding new shifts for employees is also conveniently streamlined for their convenience.
  </p>
</div>

</div>

<div class = "row">
<h2>Admin Dashboard</h2>
<div class = "col-lg-12 project_images">
  <video width="100%" height="auto" autoplay muted loop>
    <source src="../Images/cafe/Interactions_dashboard2.mov" type="video/mp4">
    Your browser does not support the video tag.
  </video>
  <p class = "project_caption">Admin Dashboard Interactions</p>
</div>
</div>

<div class = "row">
<div class = "col-lg-6">
  <h2>
    Manager Managment
  </h2>
  <p class = "tab">Administrators primarily focus on the overall performance of stores and managers, leaving the day-to-day management of individual employees to the managers themselves. This dashboard design provides comprehensive insights into manager-related metrics. It includes critical data points, such as whether managers have their shifts or payroll adequately covered. Furthermore, administrators can access information about managers, such as the number of instances they've missed payroll or the number of times their store has experienced incomplete shift coverage. These statistics serve as quantifiable measures of a manager's effectiveness and success in their role.
  </p>
</div>
<div class = "col-lg-6">
  <h2>
    Store Management
  </h2>
  <p class = "tab">Administrators also have access to detailed information about individual stores. One of the modules provides store averages, offering a comprehensive overview of various profit statistics on a yearly, quarterly, and monthly basis for each store.

    Additionally, administrators can review employee statistics for each store, including the average number of weekly absences, the count of underage workers at a particular store, and the average duration of employee lateness to their shifts at that specific store. These insights empower administrators to closely monitor and manage the performance and compliance of individual stores within the organization.
  </p>
</div>
</div>
<div class = "row">
<div class = "col-lg-6">
  <h2>
    Profits
  </h2>
  <p class = "tab">Managers have access to a weekly shift coverage chart, allowing them to promptly identify shifts with only one or no scheduled employees. Additionally, they can view a chart displaying the current percentage of shift coverage at the module's top. Adding new shifts for employees is also conveniently streamlined for their convenience.
  </p>
</div>

</div>`;

export { cafe_dashboards };