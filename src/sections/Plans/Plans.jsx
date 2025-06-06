import Section from "@/layouts/Section";
import Grid from "@/components/Grid";
import planGroups from "./PlanGroups";
import PlanCard from "@/components/PlanCard";
import TabsNavigations from "@/components/Tabs/components/TabsNavigations/index.js";
import Tabs from "@/components/Tabs/Tabs.jsx";

const Plans = () => {

  const tabsTitle = 'plans-tabs'
  const tabsNavigationId = 'plans-tabs-navigation'

  return (
   <Section
      title="Choose the plan that's right for you"
      description="Join StreamVibe and select from our flexible subscription options tailored to suit your viewing preferences. Get ready for non-stop entertainment!"
      titleId="plans-id"
      actions={(
        <TabsNavigations
        id={tabsNavigationId}
        title={tabsTitle}
        items={planGroups}
        />
      )}
   >


   <Tabs
     title={tabsTitle}
     navigationTargetElementId={tabsNavigationId}
     items={planGroups.map((planGroup) => ({
       title: planGroup.title,
       isActive: planGroup.isActive,
       children: (
         <Grid columns={3}>
           {planGroup.items.map((planItem, index) => (
             <PlanCard
               {...planItem}
               key={index}
             />
           ))}
         </Grid>
       )
     }))}
   />
   </Section>
  )
}

export default Plans
