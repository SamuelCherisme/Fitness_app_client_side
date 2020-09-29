import React from "react";
import '../Schedule/Schedule.css'

export default function ContactUs(props) {
    return (
        <div>
            <section id="schedule-service">
                <div class="flex container">
                    <div class="upcoming-classes-box">
                        <strong>Next</strong>
                        <h4>Upcoming Events</h4>
                        <table>
                            <tr>
                                <td><img src="https://onclickwebdesign.com/wp-content/uploads/stopwatch.png"
                                    alt="Stopwatch" /></td>
                                <td>Fitness</td>
                                <td>11:00 - 12:00</td>
                            </tr>
                            <tr>
                                <td><img src="https://onclickwebdesign.com/wp-content/uploads/stopwatch.png"
                                    alt="Stopwatch" /></td>
                                <td>Cardio Kickback</td>
                                <td>11:00 - 12:00</td>
                            </tr>
                            <tr>
                                <td><img src="https://onclickwebdesign.com/wp-content/uploads/stopwatch.png"
                                    alt="Stopwatch" /></td>
                                <td>Plates</td>
                                <td>12:00 - 1:00</td>
                            </tr>
                            <tr>
                                <td><img src="https://onclickwebdesign.com/wp-content/uploads/stopwatch.png"
                                    alt="Stopwatch" /></td>
                                <td>Spining</td>
                                <td>1:00 - 2:00</td>
                            </tr>
                            <tr>
                                <td><img src="https://onclickwebdesign.com/wp-content/uploads/stopwatch.png"
                                    alt="Stopwatch" /></td>
                                <td>Yoga</td>
                                <td>2:00 - 3:00</td>
                            </tr>
                            <tr>
                                <td><img src="https://onclickwebdesign.com/wp-content/uploads/stopwatch.png"
                                    alt="Stopwatch" /></td>
                                <td>Zumba</td>
                                <td>4:00 - 5:00</td>
                            </tr>

                        </table>
                    </div>
                    <div class="membership-cards-box">
                        <div class="inner-container">
                            <strong>NEXT</strong>
                            <h4>Membership Deals</h4>
                            <h2>25% <span>Discount</span></h2>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}