import React from "react";
import styles from './styles'
import Navigator from '../Navigator'

function Services() {
    const classes = styles();
    return (
        <div className={classes.root}>
            <Navigator data={'Services'} />
            <div>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin in justo ac ex congue facilisis sollicitudin eu diam. Vestibulum pellentesque, leo et egestas viverra, nulla nunc condimentum ipsum, at finibus lacus dolor sagittis neque. Sed lacinia egestas tellus, vitae faucibus metus imperdiet sed. Donec vitae lorem placerat, posuere nulla ut, tincidunt purus. Duis nec est ac tortor placerat rutrum at eu nunc. Curabitur ac sagittis lacus. Integer sapien erat, congue nec elementum eu, placerat sed velit. Aliquam faucibus felis eu dapibus imperdiet. Nunc mollis sagittis tempus.

                Fusce consequat ut lacus non malesuada. Morbi sit amet ipsum id lorem mattis luctus vitae nec purus. Nulla consectetur quam dui. Pellentesque eu tempus erat. Vivamus a viverra nibh, nec feugiat sapien. Mauris dui lacus, viverra quis quam quis, consectetur porta dui. Quisque dictum libero a lectus gravida, a cursus nibh eleifend. Nunc in mauris ac nisl posuere ullamcorper a sed augue.

                Donec condimentum est metus, eget pellentesque nisi vehicula eu. Curabitur ante purus, auctor ut luctus vitae, consequat sit amet leo. Sed elementum dolor quis orci dapibus, a viverra ligula consequat. Donec at augue felis. Ut at justo gravida, suscipit sem ac, tincidunt odio. Suspendisse in nisl mattis odio interdum hendrerit et nec elit. Sed placerat ut nisi nec efficitur. Sed lorem metus, varius a imperdiet non, porttitor in elit.

                Praesent sed viverra ipsum. Morbi vitae nisi placerat, sagittis nisl eu, luctus enim. Donec vitae tellus tincidunt, maximus dui nec, sagittis mi. Cras sollicitudin ante eget elit malesuada euismod. Fusce laoreet dapibus quam in porttitor. Nam commodo est sed tellus pulvinar pretium. Etiam venenatis suscipit metus non rutrum. Duis vestibulum quam quis enim porta pharetra. Nullam sed tincidunt tellus. In a orci malesuada, rhoncus leo consectetur, elementum purus. Sed id dui laoreet, malesuada nulla volutpat, vestibulum ipsum. Proin sed eleifend nunc, eget molestie felis. Sed egestas odio eros, a consequat nibh tempus ac. In ac dictum est. Integer faucibus vestibulum tortor a consequat.

                Maecenas interdum ut orci sollicitudin lobortis. Vivamus sit amet nibh urna. Nulla vehicula justo justo, eu pharetra ipsum convallis facilisis. Vestibulum lobortis, nulla eget tristique interdum, sem enim finibus nibh, id molestie dui urna at nisl. Suspendisse posuere, risus vel dignissim commodo, tortor enim finibus lacus, pellentesque tristique orci metus at nunc. Morbi eleifend laoreet felis ac ultricies. Maecenas vehicula convallis tempus. Maecenas a ultrices nisl. Phasellus dictum id ex non suscipit. Aliquam vehicula risus neque, sed posuere magna finibus eu. Aenean aliquet est et libero gravida, id consequat metus hendrerit.
            </div>
        </div>
    )
}

export default Services;