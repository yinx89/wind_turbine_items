<?php

$first = (int)$_POST["first"];
$last = (int)$_POST["last"];

echo '<table id="example" class="table table-striped table-bordered dt-responsive nowrap display" style="width:100%">
        <thead>
            <tr>
                <th>ID</th>
                <th>Value</th>
            </tr>
        </thead>
        <tbody>';

        for ($i = $first; $i <= $last; $i++) {
            if ($i % 15 == 0) {
                echo '<tr>
                          <td>'.$i.'</td>
                          <td>Coating Damage and Lightning Strike</td>
                      </tr>';
            } elseif ($i % 3 == 0) {
                echo '<tr>
                          <td>'.$i.'</td>
                          <td>Coating Damage</td>
                      </tr>';
            } elseif ($i % 5 == 0) {
                echo '<tr>
                          <td>'.$i.'</td>
                          <td>Lightning Strike</td>
                      </tr>';
            } else {
                echo '<tr>
                          <td>'.$i.'</td>
                          <td>'.$i.'</td>
                      </tr>';
            }
        }

echo '</tbody>
<tfoot>
    <tr>
        <th>ID</th>
        <th>Value</th>
    </tr>
</tfoot>
</table>';
