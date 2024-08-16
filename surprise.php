<?php
$surprises = [
    "🎉 Surprise! You are amazing! 🎉",
    "❤️ I love you more than words can say! ❤️",
    "🌟 You make every day brighter! 🌟",
    "🎁 Here's a virtual gift just for you! 🎁",
    "🌹 Sending you all my love on your special day! 🌹"
];

$randomSurprise = $surprises[array_rand($surprises)];
echo "<p>$randomSurprise</p>";
?>
